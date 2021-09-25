import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from '../../services/room.service';



@Component({
  selector: 'app-create-room-form',
  templateUrl: './create-room-form.component.html',
  styleUrls: ['./create-room-form.component.css']
})
export class CreateRoomFormComponent implements OnInit {

  public roomForm: FormGroup;

  public isPublic: boolean = false;

  constructor(private room: RoomService) { 
    this.roomForm = new FormGroup({
      name: new FormControl("", [ Validators.required ]),
      maxNumberOfParticipants: new FormControl("", []),
      isPublic: new FormControl(),
      password: new FormControl({value: '', disabled: false})
    })
  }

  ngOnInit(): void {
  }

  public togglePasswordField() {
    console.log(this.roomForm.get('isPublic')?.value);

    if (this.roomForm.get('isPublic')?.value) {
      this.roomForm.get('password')?.enable();
    } else {
      this.roomForm.get('password')?.disable();
      this.roomForm.get('password')?.reset();
    }
  }

  public getValuesFromForm() {

    //The first value of the checkbox is Null and if the user create without check it, the value will be null
    //So we set false as default value.
    this.isPublic = this.roomForm.get('isPublic')?.value === null ? this.isPublic : this.roomForm.get('isPublic')?.value; 
    
    return {
      "name": this.roomForm.get('name')?.value,
      "maxNumberOfParticipants": this.roomForm.get('maxNumberOfParticipants')?.value,
      "isPublic": this.isPublic,
      "password": this.roomForm.get('password')?.value
    }
  }

  public createRoom() {

    const roomData = this.getValuesFromForm();

    this.room.create(roomData).subscribe({
      next: res => {
        if (res.status){ 
          alert("Room created!")
        } else {
          alert(res.reason)
        }
      },
      error: err => {
        throw err;
      }
    })

    this.roomForm.reset();
  }

}
