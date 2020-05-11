import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-preloder',
  templateUrl: './preloder.component.html',
  styleUrls: ['./preloder.component.css']
})
export class PreloderComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    (function ($) {
      "use strict";
      $(document).on('ready', function () {
        $(window).on('load', function () {
          $(".preloader").fadeOut(500);
        });
      });
    }($));
  }

  ngOnInit(): void {
    
  }

}
