import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent, SocialIconBarComponent } from './components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SocialIconBarComponent,
  ],
  selector: 'wd-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isDarkModeEnabled$ = this.darkModeService.isDarkModeEnabled$;
  constructor(private readonly darkModeService: DarkModeService) {}
}
