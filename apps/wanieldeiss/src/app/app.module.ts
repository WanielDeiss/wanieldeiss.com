import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  PageWrapperComponent,
  SocialIconBarComponent,
} from './components';
import { IndexPage } from './pages';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TypingDirective } from './directives/typing.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [
  HeaderComponent,
  PageWrapperComponent,
  SocialIconBarComponent,
];
const PAGES = [IndexPage];

@NgModule({ declarations: [AppComponent, ...COMPONENTS, ...PAGES, TypingDirective],
    bootstrap: [AppComponent], imports: [BrowserModule, FontAwesomeModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
