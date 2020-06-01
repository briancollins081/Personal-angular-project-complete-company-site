import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NormalPost } from '../post';
import { BlogService } from '../blog.service';
import { API_URL, compareFromLatest } from 'src/app/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  latestPosts: NormalPost[] = [];
  API_URL = API_URL;
  blogSearch:FormGroup;

  searchSubscription:Subscription;

  constructor(
    private blogService: BlogService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.blogSearch = new FormGroup({
      keyword: new FormControl("", Validators.required)
    });

    this.blogService.fetchAllPosts()
      .subscribe(
        res => {
          this.latestPosts = res.data.posts;
          this.latestPosts.map(p => {
            p.updatedAt = new Date(p.updatedAt).toDateString();
            p.introduction = p.post_content.substr(0, p.post_content.indexOf('</p>') > 0 ? p.post_content.indexOf('</p>') : 200)
          });
          this.latestPosts = this.latestPosts.sort(compareFromLatest).slice(0, 5);
          this.isLoading = false;

        },
        error => {
          console.log(error);

        });
  }

  ngOnDestroy() {
    if(this.searchSubscription){
      this.searchSubscription.unsubscribe();
    }
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

  onSearch(){
    // console.log(this.blogSearch.get('keyword').value);
    this.blogService.searchPostTriggered.emit(this.blogSearch.get('keyword').value);
    this.router.navigate(['/blog']);
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