import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { DocumentsComponent } from './documents.component';
import { Routes, RouterModule } from '@angular/router';
import { Display } from './display/display.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent
  },
  {
    path: 'health',
    component: Display
  }
]

@NgModule({
  declarations: [
    DocumentsComponent,
    Display
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxExtendedPdfViewerModule,
    SharedModule
  ]
})
export class DocumentsModule { }
