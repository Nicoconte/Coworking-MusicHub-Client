import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { LobbyComponent } from './room/pages/lobby/lobby.component';
import { UserSigninComponent } from './user/pages/user-signin/user-signin.component';
import { UserSignupComponent } from './user/pages/user-signup/user-signup.component';

import { SessionGuardService as SessionGuard } from './core/guards/session-guard.service'; 
import { AuthGuardService as AuthGuard } from './core/guards/auth-guard.service';
import { RoomComponent } from './room/pages/room/room.component';

const routes: Routes = [
  { path:"signin", component: UserSigninComponent, canActivate: [SessionGuard] },
  { path:"signup", component: UserSignupComponent, canActivate: [SessionGuard] },
  { path:"lobby", component: LobbyComponent, canActivate: [AuthGuard] },
  { path:"room/:id", component: RoomComponent },
  { path:"**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
