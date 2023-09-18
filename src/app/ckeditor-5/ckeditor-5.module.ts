import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveDemoComponent } from './five-demo/five-demo.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FiveDemoComponent
  ],
  exports: [
    FiveDemoComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule
  ]
})
export class CKEditor5Module { }
