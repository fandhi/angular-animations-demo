import { trigger, animate, state, transition, style, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
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
)

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(500)
  ]),
  transition(':leave',
    useAnimation(bounceOutLeftAnimation)
  )
]);

export let fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration}} {{ easing }}')
], {
  params: {
    duration: '2s',
    easing: 'ease-out'
  }
})
export let fadeOutAnimation = animation([
  style({ opacity: 0 }),
  animate(2000)
])
export let fade = trigger('fade', [

  // state('void', style({ opacity: 0 })),

  /* transition(
    // 'void => *, * => void', 
    // 'void <=> *',
    ':enter, :leave',
    [
      animate(500)
    ]), */
  transition(':enter', 
    useAnimation(fadeInAnimation)
  ),
  transition(':leave', [
    useAnimation(fadeOutAnimation)
  ])
]);