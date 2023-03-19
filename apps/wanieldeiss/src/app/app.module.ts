import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  CvCompanyComponent,
  CvPositionComponent,
  HeaderComponent,
} from './components';
import { IndexPage, CvPage } from './pages';
import { HttpClientModule } from '@angular/common/http';
import { TypingDirective } from './directives/typing.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [HeaderComponent, CvCompanyComponent, CvPositionComponent];
const PAGES = [IndexPage, CvPage];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS, ...PAGES, TypingDirective],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
