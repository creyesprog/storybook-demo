import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import PureInboxScreenComponent from './components/pure-inbox-screen.component';
import InboxScreenComponent from './components/inbox-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PureInboxScreenComponent,
    InboxScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
