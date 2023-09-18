import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CKEditor4Module } from './ckeditor-4/ckeditor-4.module';
import { CKEditor5Module } from './ckeditor-5/ckeditor-5.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CKEditor4Module,
    CKEditor5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
