import { trigger, animate , state, transition, style } from '@angular/animations';

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)'}),
    animate(500)
  ]),
  transition(':leave', [
    animate('500ms cubic-bezier(.61, .29, .07, 1.02)', style({ transform: 'translateX(-100px)'}))
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