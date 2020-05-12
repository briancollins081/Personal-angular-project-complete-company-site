import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    (function ($) {
      "use strict";
      $(document).on('ready', function () {
        // Header Sticky
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 150) {
            $('.header-sticky').addClass("is-sticky");
          }
          else {
            $('.header-sticky').removeClass("is-sticky");
          }
        });

        // Dropdown
        $('.navbar-light .dropdown').on('hover', function () {
          $(this).on('find', '.dropdown-menu').first().stop(true, true).slideDown(100);
        }, function () {
          $(this).on('find', '.dropdown-menu').first().stop(true, true).slideUp(50)
        });
      });
    }($));
  }

  ngOnInit(): void {
    
  }

  

}
