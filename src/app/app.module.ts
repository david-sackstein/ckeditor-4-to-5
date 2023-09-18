import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CKEditor4Module } from './ckeditor-4/ckeditor-4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CKEditor4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
