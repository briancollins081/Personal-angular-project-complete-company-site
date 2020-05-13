import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { NormalPost } from '../post';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit, OnDestroy {
  private sub: any;
  post: NormalPost = {
    _id: "",
    author_title: "",
    author_fname: "",
    author_lname: "",
    author_email: "",
    post_title: "",
    post_category: "",
    post_content: "",
    post_image_url: "",
    creator: "",
    createdAt: "",
    updatedAt: "",

    introduction: "",
  };
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.blogService.fetchPost(params['id']).subscribe(res => {
        this.post = res.data.post;
        if (!this.post) {
          throw new Error("No post found!")
        }
        this.post.createdAt = new Date(this.post.createdAt).getDate() + ' <br/> ' + this.getMothName(new Date(this.post.createdAt).getMonth());
        console.log('post', this.post);

      }, error => {
        console.log(error);
        alert(error.data.message || 'Error fetching post');
      });
    })
  }
  getMothName(index: number) {
    return index == 0 ? 'Jan' : index == 1 ? 'Feb' : index == 2 ? 'Mar' : index == 3 ? 'Apr' : index == 4 ? 'May' : index == 5 ? 'Jun' : index == 6 ? 'Jul' : index == 7 ? 'Aug' : index == 8 ? 'Sep' : index == 9 ? 'Oct' : index == 10 ? 'Nov' : index == 11 ? 'Dec' : 'Jan';
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
