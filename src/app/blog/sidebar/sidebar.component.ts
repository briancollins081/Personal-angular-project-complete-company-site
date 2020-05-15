import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NormalPost } from '../post';
import { BlogService } from '../blog.service';
import { compareFromLatest } from 'src/app/constants';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isLoading: boolean = true;
  latestPosts: NormalPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.fetchAllPosts()
      .subscribe(
        res => {
          this.latestPosts = res.data.posts;
          this.latestPosts.map(p => {
            p.updatedAt = new Date(p.updatedAt).toLocaleDateString();
            p.introduction = p.post_content.substr(0, p.post_content.indexOf('</p>') > 0 ? p.post_content.indexOf('</p>') : 200)
          });
          this.latestPosts = this.latestPosts.sort(compareFromLatest).slice(0, 5);
          this.isLoading = false;

        },
        error => {
          console.log(error);

        });
  }

  ngAfterViewInit() {
    // this.applySettings();
  }

  compare(a: NormalPost, b: NormalPost) {
    let ad: number = new Date(a.createdAt).getTime();
    let bd: number = new Date(b.createdAt).getTime();

    if (ad < bd) {
      return 1;
    }
    if (ad > bd) {
      return -1;
    }
    return 0;
  }
  // applySettings() {
  //   $(document).ready(() => {
  //     var elementPosition = $('#sidebar').offset();
  //     console.log('elementPosition', elementPosition);

  //     $(window).scroll(function () {
  //       if ($(window).scrollTop() > elementPosition.top) {
  //         $('#sidebar').css('position', 'fixed').css('top', '0');
  //       } else {
  //         $('#sidebar').css('position', 'static');
  //       }
  //     });
  //   });
  // }
}