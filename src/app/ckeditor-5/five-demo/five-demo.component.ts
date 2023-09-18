import { Component } from '@angular/core';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

@Component({
  selector: 'app-five-demo',
  templateUrl: './five-demo.component.html',
  styleUrls: ['./five-demo.component.scss']
})
export class FiveDemoComponent {
  editor = InlineEditor;
  editorData: string = '<p>Customizable tooltip</p>';
}
