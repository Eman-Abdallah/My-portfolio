import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,

]);
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
}
