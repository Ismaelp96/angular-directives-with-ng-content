import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardSubText]',
  host: {
    class: 'ca-c-card__sub-text',
  },
})
export class CardSubTextDirective {}
