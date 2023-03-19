import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components';
import { IndexPage, CvPage } from './pages';
import { HttpClientModule } from '@angular/common/http';
import { TypingDirective } from './directives/typing.directive';

const COMPONENTS = [HeaderComponent];
const PAGES = [IndexPage, CvPage];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS, ...PAGES, TypingDirective],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
