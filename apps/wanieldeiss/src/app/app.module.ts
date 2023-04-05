import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  CvCompanyComponent,
  CvDateComponent,
  CvPositionComponent,
  HeaderComponent,
  PageWrapperComponent,
  SocialIconBarComponent,
} from './components';
import { IndexPage, CvPage } from './pages';
import { HttpClientModule } from '@angular/common/http';
import { TypingDirective } from './directives/typing.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [
  HeaderComponent,
  CvCompanyComponent,
  CvDateComponent,
  CvPositionComponent,
  PageWrapperComponent,
  SocialIconBarComponent,
];
const PAGES = [IndexPage, CvPage];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS, ...PAGES, TypingDirective],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
