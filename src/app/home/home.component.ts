import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.delay(0).then(() => {
      this.initJS();
    })
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  initJS() {

    $('.hero-slider').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: false,
      dots: false,
      navText: [
        "<i class='icofont-double-left'></i>",
        "<i class='icofont-double-right'></i>"
      ]
    });

    $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 300,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

  }
}
