import { Component, OnInit } from '@angular/core';
import { Video } from './model/video';


@Component({
  selector: 'corp-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit  {

  videoList: Video[] = [
    {
      title: 'Nhạc Chill Buồn 2023',
      link: 'https://www.youtube.com/watch?v=8Qa9r4ezcVU'
    },
    {
      title: 'Trịnh Đình Quang 2023',
      link: 'https://www.youtube.com/watch?v=YiXJI417alY&t=2735s'
    },
    {
      title: 'Từ Nay Hết Duyên Em Trả Áo',
      link: 'https://www.youtube.com/watch?v=nrqOag-uI9Y&t=2349s'
    }, 
    {
      title: ' Thương Ly Biệt Remix',
      link: 'https://www.youtube.com/watch?v=Ghu6FSq-G7o'
    },
    {
      title: 'Nhạc Chill TikTok',
      link: 'https://www.youtube.com/watch?v=YJkPXu_z1us'
    },
    {
      title: 'Nhạc Chill Dễ Ngủ ',
      link: 'https://www.youtube.com/watch?v=0qWFL4Qt8ZE'
    }, {
      title: 'NGHE LÀ NGỦ',
      link: 'https://www.youtube.com/watch?v=Y1-ts9U8kmg'
    },
    {
      title: 'Nhạc Acoustic 8x9x',
      link: 'https://www.youtube.com/watch?v=m04-ows2eng'
    },
    {
      title: 'Trách Phận Vô Danh, ',
      link: 'https://www.youtube.com/watch?v=kXFEJDPslng'
    },
    {
      title: 'Nhạc Chill Tiktok',
      link: 'https://www.youtube.com/watch?v=_PMsBSuefpA'
    },
    {
      title: ' Nhạc Lofi Buồn Cho Người Thất Tình',
      link: 'https://www.youtube.com/watch?v=xTHf-o7eBBY'
    }
  ];

  currentVideoId: string;

  selectVideo(video: Video) {
    const params = new URL(video.link).searchParams;
    this.currentVideoId = params.get('v');
  }

  ngOnInit(): void {
    this.selectVideo(this.videoList[0])
  }
}
