import { Component, Input } from '@angular/core';
import { CvPosition } from '@dan/interfaces';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wd-cv-position',
  templateUrl: './cv-position.component.html',
  styleUrls: ['./cv-position.component.scss'],
})
export class CvPositionComponent {
  icons = { faCircle };

  @Input() positions!: CvPosition[];
}
