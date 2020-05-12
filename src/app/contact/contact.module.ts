import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // AgmCoreModule.forRoot(
    //   {
    //     // please get your own API key here:
    //     // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //     apiKey: 'AIzaSyCMxY57T_1RoU_89vqa8x7_ZmHwi35rKzs'
    //   })
  ]
})
export class ContactModule { }
