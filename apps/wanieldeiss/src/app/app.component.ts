import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent, SocialIconBarComponent } from './components';
import { IndexPage } from './pages';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent, IndexPage, SocialIconBarComponent],
  selector: 'wd-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isDarkModeEnabled$ = this.darkModeService.isDarkModeEnabled$;
  constructor(private readonly darkModeService: DarkModeService) {}
}
