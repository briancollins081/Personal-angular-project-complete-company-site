import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PrivacyComponent, TermsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    // RouterModule
  ],
})
export class CoreModule { }
