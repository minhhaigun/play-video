import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";
import {VideoPlayerComponent} from './video-player/video-player.component'

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, YouTubePlayerModule ],
  declarations: [ AppComponent,VideoPlayerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
