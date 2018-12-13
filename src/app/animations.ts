import { trigger, animate , state, transition, style } from '@angular/animations';

export let fade =   trigger('fade', [

  state('void', style({ opacity: 0 })),
  
  transition(
    // 'void => *, * => void', 
    // 'void <=> *',
    ':enter, :leave',
    [
    animate(1000)
  ])
])