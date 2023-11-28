import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'corp-video-player',
  templateUrl: 'video-player.component.html'
})
export class VideoPlayerComponent implements OnInit {
  private apiLoaded = false;

  @Input() videoId: string;

  constructor() { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    } else {}
  }

}