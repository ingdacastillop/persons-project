import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatatableComponentModule } from '@xofttion-enterprise/angular-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatatableComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
