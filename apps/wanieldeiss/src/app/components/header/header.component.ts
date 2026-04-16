import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'wd-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly darkModeService = inject(DarkModeService);
  isDarkModeEnabled$ = this.darkModeService.isDarkModeEnabled$;

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
