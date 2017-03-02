import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-title',
  templateUrl: './view-title.component.html'
})
export class ViewTitleComponent {
  @Input()
  title: string = 'My Title';
}
