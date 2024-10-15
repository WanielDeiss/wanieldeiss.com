import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'wd-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDarkModeEnabled$ = this.darkModeService.isDarkModeEnabled$;

  constructor(private readonly darkModeService: DarkModeService) {}

  click(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  clickToggleDarkMode() {
    this.darkModeService.toogleDarkMode();
  }
}
