import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloderComponent } from './preloder/preloder.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PreloderComponent,
    NewsletterComponent,
    CallToActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PreloderComponent,
    NewsletterComponent,
    CallToActionComponent
  ]
})
export class SharedModule { }
