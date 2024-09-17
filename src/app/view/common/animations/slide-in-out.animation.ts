import { animate, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export function slideInOutAnimation(duration: number): AnimationTriggerMetadata {
  return trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate(`${duration}ms ease`, style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      animate(`${duration}ms ease`, style({ transform: 'translateX(-100%)' }))
    ])
  ]);
}
