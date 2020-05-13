import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { NormalPost } from './post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  isLoading: boolean = true;
  posts: NormalPost[] = [];
  // latestPosts: NormalPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.fetchAllPostsPagination(0, 5)
      .subscribe(
        res => {
          console.log(res);
          this.posts = res.data.posts;
          this.posts.map(p => {
            p.updatedAt = new Date(p.updatedAt).toLocaleDateString();
            p.introduction = p.post_content.substr(0, p.post_content.indexOf('</p>') > 0 ? p.post_content.indexOf('</p>') : 200)
          });
          // this.latestPosts = this.posts.slice(0, 4).sort(this.compare);
          // console.log('latest posts', this.latestPosts);
          
          this.isLoading = false;
          console.log('posts', this.posts);

        },
        error => {
          console.log(error);

        });
  }
  compare(a:NormalPost, b:NormalPost) {
    let ad:number = new Date(a.createdAt).getTime(); 
    let bd:number = new Date(b.createdAt).getTime();
    if (ad < bd) {
      return -1;
    }
    if (ad > bd) {
      return 1;
    }
    return 0;
  }
}
