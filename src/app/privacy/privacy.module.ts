import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    redirectTo: 'policy'
  },
  {
    path:'policy',
    component: PrivacyComponent
  },
  {
    path:'terms',
    component: TermsComponent
  }
]

@NgModule({
  declarations: [
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivacyModule { }
