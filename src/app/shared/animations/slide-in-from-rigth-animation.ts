// animations.ts
import { trigger, transition, style, animate } from '@angular/animations';

export const slideInFromRight = trigger('slideInFromRight', [
  transition(':enter', [
    style({ transform: 'translateX(10%)', opacity: 0 }),
    animate(
      '600ms ease-out',
      style({ transform: 'translateX(0)', opacity: 1 })
    ),
  ]),
]);
