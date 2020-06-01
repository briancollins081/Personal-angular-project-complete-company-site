import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloderComponent } from './preloder/preloder.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PreloderComponent,
    NewsletterComponent,
    CallToActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PreloderComponent,
    NewsletterComponent,
    CallToActionComponent
  ]
})
export class SharedModule { }
