import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { BlogComponent } from './blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 's/:id',
    component: BlogSingleComponent
  }
]

@NgModule({
  declarations: [BlogComponent, BlogSingleComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
