import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'wd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkModeEnabled$ = this.darkModeService.isDarkModeEnabled$;
  constructor(private readonly darkModeService: DarkModeService) {}
}
