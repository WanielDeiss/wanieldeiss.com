import { Component, Input } from '@angular/core';

@Component({
  selector: 'wd-cv-date',
  templateUrl: './cv-date.component.html',
  styleUrls: ['./cv-date.component.scss'],
})
export class CvDateComponent {
  @Input() from!: Date;
  @Input() to: Date | undefined = undefined;
  @Input() isCurrent = false;
}
