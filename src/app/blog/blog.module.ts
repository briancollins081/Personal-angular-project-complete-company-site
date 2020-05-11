import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';



@NgModule({
  declarations: [BlogComponent, BlogSingleComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
