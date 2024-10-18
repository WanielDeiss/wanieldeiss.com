import { Component } from '@angular/core';
import { PageWrapperComponent } from '../../components';
import { TypingDirective } from '../../directives/typing.directive';

@Component({
  standalone: true,
  imports: [PageWrapperComponent, TypingDirective],
  selector: 'wd-index',
  templateUrl: './index.page.html',
})
export class IndexPage {
  thisIsMe: string[] = [
    ' software engineer',
    'n open source contributor',
    ' terminal lover',
    ' maker',
    ' 3d printing enthusiast',
    ' dungeon master',
  ];
}
