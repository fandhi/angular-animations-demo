import { trigger, animate , state, transition, style, keyframes } from '@angular/animations';

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)'}),
    animate(500)
  ]),
  transition(':leave', [
    animate('500ms ease-out', 
    keyframes([
      style({ 
        offset: .2, 
        opacity: 1,
        transform: 'translateX(20px)'
      }),
      style({ 
        offset: 1, 
        opacity: 0,
        transform: 'translateX(-100%)'
      })
    ]))
  ])
]);

export let fade =   trigger('fade', [

  state('void', style({ transform: 'translateX(-20px)', opacity: 0 })),
  
  transition(
    // 'void => *, * => void', 
    // 'void <=> *',
    ':enter, :leave',
    [
    animate(500)
  ])
]);