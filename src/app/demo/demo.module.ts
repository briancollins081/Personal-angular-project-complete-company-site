import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { Routes, RouterModule } from '@angular/router';
// import { FreetrialComponent } from './freetrial/freetrial.component';

const routes:Routes = [
  {
    path: '',
    component: DemoComponent
  }
]

@NgModule({
  declarations: [
    DemoComponent, 
    // FreetrialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DemoModule { }
