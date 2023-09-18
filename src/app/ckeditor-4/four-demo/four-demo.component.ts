import { Component } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'app-four-demo',
  templateUrl: './four-demo.component.html',
  styleUrls: ['./four-demo.component.scss']
})
export class FourDemoComponent {
  type: CKEditor4.EditorType = CKEditor4.EditorType.INLINE;
  editorData: any = '<p>Customizable tooltip</p>';
}
