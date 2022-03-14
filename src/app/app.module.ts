import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil } from 'ng-brazil'
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { AuthGuard } from './services/app.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Utilities } from './utils/Utilities';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    NavModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/' }
    AuthGuard,    
    Utilities
    //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
