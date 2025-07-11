import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardContentDirective } from './card/directives/base/card-content.directive';
import { CardHeaderDirective } from './card/directives/base/card-header.directive';
import { CardDescriptionTextDirective } from './card/directives/texts/card-description-text.directive';
import { CardMainTextDirective } from './card/directives/texts/card-main-text-.directive';
import { CardSubTextDirective } from './card/directives/texts/card-sub-text.directive';

import { CardLargeImageDirective } from './card/directives/images/card-large-image.directive';
import { CardSmallImageDirective } from './card/directives/images/card-small-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContentDirective,
    CardHeaderDirective,
    CardMainTextDirective,
    CardSubTextDirective,
    CardDescriptionTextDirective,
    CardSmallImageDirective,
    CardLargeImageDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
