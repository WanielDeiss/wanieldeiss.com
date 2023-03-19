import { Component, Input } from '@angular/core';
import { Cv } from '@dan/interfaces';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wd-cv-company',
  templateUrl: './cv-company.component.html',
  styleUrls: ['./cv-company.component.scss'],
})
export class CvCompanyComponent {
  icons = { faBriefcase };

  @Input() cvList!: Cv[];
}
