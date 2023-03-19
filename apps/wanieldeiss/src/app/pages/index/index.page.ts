import { Component } from '@angular/core';

@Component({
  selector: 'wd-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {
  thisIsMe: string[] = [
    'software engineer',
    'open source contributor',
    'terminal lover',
    'maker',
    '3d printing enthusiast',
  ];
}
