import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'wd-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDarkModeEnabled$ = this.darkModeService.isDarkModeEnabled$;

  constructor(
    private readonly scroller: ViewportScroller,
    private readonly darkModeService: DarkModeService
  ) {}

  click(section: string) {
    this.scroller.scrollToAnchor(section);
  }

  clickToggleDarkMode() {
    this.darkModeService.toogleDarkMode();
  }
}
