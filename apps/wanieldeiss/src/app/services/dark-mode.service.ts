import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDarkModeEnabled$ = new BehaviorSubject<boolean>(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  toogleDarkMode() {
    this.isDarkModeEnabled$.next(!this.isDarkModeEnabled$.value);
  }
}
