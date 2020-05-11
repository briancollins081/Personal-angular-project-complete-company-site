import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloderComponent } from './preloder/preloder.component';
import { NewsletterComponent } from './newsletter/newsletter.component';



@NgModule({
  declarations: [
    PreloderComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreloderComponent,
    NewsletterComponent
  ]
})
export class SharedModule { }
