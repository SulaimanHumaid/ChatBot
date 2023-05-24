import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NbChatCustomMessageService,
  NbChatModule,
  NbFocusMonitor,
  NbStatusService,
  NbThemeModule,
  NbLayoutModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NbChatModule.forRoot(),
    NbThemeModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [NbStatusService, NbChatCustomMessageService, NbFocusMonitor],
  bootstrap: [AppComponent],
})
export class AppModule {}
