import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { UserSigninComponent } from './user/pages/user-signin/user-signin.component';
import { UserSignupComponent } from './user/pages/user-signup/user-signup.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { LobbyComponent } from './room/pages/lobby/lobby.component';
import { CreateRoomFormComponent } from './room/components/create-room-form/create-room-form.component';
import { RoomModalComponent } from './room/components/room-modal/room-modal.component';
import { RoomCardComponent } from './room/components/room-card/room-card.component';
import { RoomListComponent } from './room/components/room-list/room-list.component';
import { RoomComponent } from './room/pages/room/room.component';
import { SendSongModalComponent } from './song/components/send-song-modal/send-song-modal.component';
import { SongPreviewCardComponent } from './song/components/song-preview-card/song-preview-card.component';
import { SongQueuePreviewComponent } from './song/components/song-queue-preview/song-queue-preview.component';
import { IframeYoutubeComponent } from './song/components/iframe-youtube/iframe-youtube.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserSigninComponent,
    UserSignupComponent,
    NotFoundComponent,
    LobbyComponent,
    CreateRoomFormComponent,
    RoomModalComponent,
    RoomCardComponent,
    RoomListComponent,
    RoomComponent,
    SendSongModalComponent,
    SongPreviewCardComponent,
    SongQueuePreviewComponent,
    IframeYoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
