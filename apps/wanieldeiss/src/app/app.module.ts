import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  CvCompanyComponent,
  CvDateComponent,
  CvPositionComponent,
  HeaderComponent,
} from './components';
import { IndexPage, CvPage } from './pages';
import { HttpClientModule } from '@angular/common/http';
import { TypingDirective } from './directives/typing.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialIconBarComponent } from './components/social-icon-bar/social-icon-bar.component';

const COMPONENTS = [
  HeaderComponent,
  CvCompanyComponent,
  CvDateComponent,
  CvPositionComponent,
];
const PAGES = [IndexPage, CvPage];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...PAGES,
    TypingDirective,
    CvDateComponent,
    SocialIconBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
