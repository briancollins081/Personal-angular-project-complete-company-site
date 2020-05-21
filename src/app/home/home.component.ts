import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { NormalPost } from '../blog/post';
import { API_URL, compareFromOldest } from "../constants";

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  posts: NormalPost[] = [];
  isLoading: boolean = true;
  API_URL = API_URL;
  // post = null;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.initJS();

  }

  ngAfterViewInit(): void {
    this.blogService.fetchAllPosts()
      .subscribe(res => {
        this.posts = res.data.posts;
        this.posts = this.posts.sort(compareFromOldest).slice(0,3);
        this.isLoading = false;
        // console.log('posts', this.posts);
      }, error => {
        console.log("Error retriving posts")
      });
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

    $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 300,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    $('.feedback-carousel').owlCarousel({
      loop: true,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: false,
      margin: 30,
      center: true,
      dots: false,
      navText: [
        "<i class='icofont-swoosh-left'></i>",
        "<i class='icofont-swoosh-right'></i>"
      ],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  }
}
