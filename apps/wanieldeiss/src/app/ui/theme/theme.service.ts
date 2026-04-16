import { Injectable, computed, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'wd-theme';
const DEFAULT_THEME: Theme = 'dark';

/**
 * Signal-based theme store. Single source of truth for the active theme.
 *
 * - Reads the persisted choice from localStorage on construction.
 * - Falls back to `dark` (the design-system default) when nothing is stored.
 * - Mirrors the active theme onto `<html>.dark` so Tailwind's `dark:` variants
 *   and the semantic CSS variables in `styles.css` resolve correctly.
 * - The boot script in `index.html` applies the same logic before the first
 *   paint to prevent a flash of incorrect theme.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.readInitialTheme());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      const next = this.theme();
      if (typeof document === 'undefined') {
        return;
      }
      document.documentElement.classList.toggle('dark', next === 'dark');
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage unavailable — ignore */
      }
    });
  }

  toggle(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  set(theme: Theme): void {
    this.theme.set(theme);
  }

  private readInitialTheme(): Theme {
    if (typeof window === 'undefined') {
      return DEFAULT_THEME;
    }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      /* localStorage may be blocked (Safari private mode, etc.) */
    }
    return DEFAULT_THEME;
  }
}
