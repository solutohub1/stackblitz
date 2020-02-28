import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookevent',
  templateUrl: './bookevent.component.html',
  styleUrls: ['./bookevent.component.css']
})
export class BookeventComponent implements OnInit {

  constructor() { }
  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
     
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://www.expo2020dubai.com/-/media/expo2020/events/live-entertainment/expo2020-liveentertainment-1600-x-900.jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2019/07/action-adults-celebration-433452.jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://canarywharf.com/wp-content/uploads/2018/12/canary-wharf-arts-events-aw18-18-741x417.jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlottemagazine.com/content/uploads/2019/11/HP-Celebration-Backdrop-REVISION-28129-1024x633.jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://149368340.v2.pressablecdn.com/wp-content/uploads/2019/09/header_parade-events.jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

  confirm(){
    alert("Event Booked Successfully!");
  }

}
