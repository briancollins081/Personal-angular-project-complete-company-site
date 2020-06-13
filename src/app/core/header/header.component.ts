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
          if ($(this).scrollTop() > -1) {
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

        let humburger = $('#humburger');
        let closebtn = $('#closebtn');

        $(".navbar-toggler").on("click", function () {
          if (humburger.hasClass('hide')) {
            humburger.removeClass('hide').addClass('unhidee');
          }
          else {
            humburger.removeClass('unhidee').addClass('hide');
          }
          if (closebtn.hasClass('hide')) {
            closebtn.removeClass('hide').addClass('unhidee');
          }
          else {
            closebtn.removeClass('unhidee').addClass('hide')
          }
        });

        let collapseMenuMain = $('#navbarSupportedContent');
        let collapseMenus = $('#navbarSupportedContent li');
        collapseMenus.on("click", function () {
          // navbar-collapse collapse show
          if (collapseMenuMain.hasClass('show')) {
            collapseMenuMain.removeClass('show');
            // console.log("Clicked!!!!");
          }

          if (!closebtn.hasClass('hide')) {
            closebtn.addClass('hide');
          }
          if(humburger.hasClass('hide')){
            humburger.removeClass('hide');
          }
        });
      });
    }($));
  }

  ngOnInit(): void {

  }



}
