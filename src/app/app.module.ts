import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CKEditorModule as CKEditorModule4 } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
