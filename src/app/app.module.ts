import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardContentDirective } from './card/directives/card-content.directive';
import { CardHeaderDirective } from './card/directives/card-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContentDirective,
    CardHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
