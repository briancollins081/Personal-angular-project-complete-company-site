import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from './blog.service';
import { NormalPost } from './post';
import { compareFromLatest, API_URL } from '../constants';
import { Subscription } from 'rxjs';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  searchResultsFound = true;
  posts: NormalPost[] = [];

  //pagination
  pages: number[] = [];
  pageCount: number = 4;
  currentPage: number = 0;
  totalPosts: number = 0;

  API_URL = API_URL;

  searchSubs: Subscription;

  constructor(
    private blogService: BlogService,
    // private router: Router
  ) { }

  ngOnInit(): void {
    this.initBlogPosts();
    this.searchSubs = this.blogService.searchPostTriggered.subscribe(keyword => {
      // console.log("keywors search", keyword);
      this.blogService.searchPosts(keyword).subscribe(
        res => {
          this.isLoading = true;

          if (res.data.post.length <= 0) {
            this.posts = [];
            this.totalPosts = 0;
            this.searchResultsFound = false;
            this.isLoading = false;
          } else {
            this.posts = res.data.post;
            this.totalPosts = res.data.post.length;
            let i;
            for (i = 1; i <= this.totalPosts; i++) {
              if (i % 4 === 0) {
                this.pages.push(i);
              }
            }
            if (this.totalPosts % 4 !== 0) {
              this.pages.push(i + 1);
            }
            console.log("posts", this.posts);

            this.searchResultsFound = true;
            this.isLoading = false;
          }
        },
        error => {
          this.posts = [];
          this.searchResultsFound = false;
          // console.log('search err', error);
        });
    });
  }
  ngOnDestroy() {
    if (this.searchSubs) {
      this.searchSubs.unsubscribe();
    }
  }
  initBlogPosts() {
    this.isLoading = true;
    this.blogService.fetchAllPosts()
      .subscribe(
        res => {
          // console.log(res);
          this.posts = res.data.posts;
          this.totalPosts = res.data.totalPosts;
          let i;
          for (i = 1; i <= this.totalPosts; i++) {
            if (i % 4 === 0) {
              this.pages.push(i);
            }
          }
          if (this.totalPosts % 4 !== 0) {
            this.pages.push(i + 1);
          }
          this.posts = this.posts.sort(compareFromLatest).slice(0, 4);
          this.posts.map(p => {
            p.updatedAt = new Date(p.updatedAt).toDateString();
            p.introduction = p.post_content.substr(0, p.post_content.indexOf('</p>') > 0 ? p.post_content.indexOf('</p>') : 200)
          });
          // this.latestPosts = this.posts.slice(0, 4).sort(this.compare);
          // console.log('latest posts', this.latestPosts);
          this.isLoading = false;
          this.searchResultsFound = true;
          // console.log('posts', this.posts);

        },
        error => {
          this.isLoading = false;
          this.posts = [];
          this.totalPosts = 0;
          console.log(error);
        });
  }
  fetchNext() {
    this.isLoading = true;
    if (((this.currentPage) >= (this.totalPosts / 4)) && (this.totalPosts % this.pageCount === 0)) {
      this.isLoading = false;
      return;
    }
    this.fetchPage(this.currentPage + 1)
  }

  fetchPrevious() {
    this.isLoading = true;
    if (this.currentPage <= 0) {
      this.isLoading = false;
      return;
    }
    this.fetchPage(this.currentPage - 1);
  }

  fetchPage(page: number) {
    this.isLoading = true;
    this.scrollToTop();
    this.currentPage = page;
    this.blogService.fetchAllPostsPagination(page, this.pageCount)
      .subscribe(res => {
        if (res.data.posts) {
          // console.log('res.data.posts', res.data.posts);
          this.posts = res.data.posts;
          this.isLoading = false;
        }
      }, error => {
        console.log(error);
        alert(error.toString())
      });
  }

  scrollToTop() {
    window.scrollTo(0, 100);
  }

}
