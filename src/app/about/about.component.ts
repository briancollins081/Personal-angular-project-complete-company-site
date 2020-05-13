import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initJS();
  }

  initJS() {
    $('.expert-doctors-carousel').owlCarousel({
      loop: true,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: false,
      margin: 30,
      dots: false,
      navText: [
        "<i class='icofont-swoosh-left'></i>",
        "<i class='icofont-swoosh-right'></i>"
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

  }
}
