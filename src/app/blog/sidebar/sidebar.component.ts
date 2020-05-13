import { Component, OnInit } from '@angular/core';
import { NormalPost } from '../post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoading: boolean = true;
  latestPosts: NormalPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.fetchAllPosts()
      .subscribe(
        res => {
          // console.log(res);
          this.latestPosts = res.data.posts;
          this.latestPosts.map(p => {
            p.updatedAt = new Date(p.updatedAt).toLocaleDateString();
            p.introduction = p.post_content.substr(0, p.post_content.indexOf('</p>') > 0 ? p.post_content.indexOf('</p>') : 200)
          });
          this.latestPosts = this.latestPosts.sort(this.compare).slice(0, 5);
          // console.log('latest posts', this.latestPosts);

          this.isLoading = false;
        },
        error => {
          console.log(error);

        });
  }
  compare(a: NormalPost, b: NormalPost) {
    let ad: number = new Date(a.createdAt).getTime();
    let bd: number = new Date(b.createdAt).getTime();
    console.log('ad', ad, 'bd', bd);
    
    if (ad < bd) {
      return 1;
    }
    if (ad > bd) {
      return -1;
    }
    return 0;
  }
}