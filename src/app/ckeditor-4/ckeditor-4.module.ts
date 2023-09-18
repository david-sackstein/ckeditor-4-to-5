import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourDemoComponent } from './four-demo/four-demo.component';

import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FourDemoComponent
  ],
  exports: [
    FourDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule
  ]
})
export class CKEditor4Module { }
