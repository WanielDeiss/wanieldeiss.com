import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  SectionHeaderComponent,
} from '../section-header/section-header.component';
import { CardComponent } from '../../ui/card/card.component';
import { ContainerComponent } from '../../ui';
import { PROJECTS } from './projects.data';

@Component({
  standalone: true,
  selector: 'wd-projects',
  imports: [ContainerComponent, SectionHeaderComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
}
