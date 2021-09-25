import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() formH1Title!: string;
  @Input() formH4SubTitle!: string;
   
  @Input() formType!: string;

  public userForm: FormGroup = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor(private user: UserService, private authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

  public getFormValues(): {} {
    return {
      "username": this.userForm.get('username')?.value,
      "password": this.userForm.get('password')?.value
    }
  }

  public signIn(): void {
    const userCredentials = this.getFormValues();

    this.authentication.login(userCredentials);
  }

  public signUp(): void {
    const userCredentials = this.getFormValues();

    this.user.register(userCredentials).subscribe({
      next: res => {
        if (res.status) {
          alert("User created!");
        } else {
          alert(res.reason);
        }
      },
      error: err => {
        throw err;
      }
    })
  }

}
