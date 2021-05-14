import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations';

export const SliderAnimation =
  trigger('routeAnimations', [
    transition('isFarLeft => isLeft, isFarLeft => isRight, isFarLeft => isFarRight, isLeft => isRight, isLeft => isFarRight, isRight => isFarRight, isCenter => isRight, isLeft => isCenter', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%'}))
      ])
    ]),
  ]),
    transition('isFarRight => isLeft, isFarRight => isRight, isFarRight => isFarLeft, isLeft => isFarLeft, isRight => isLeft, isRight => isFarLeft, isCenter => isLeft, isRight => isCenter', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('600ms ease', style({ left: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('600ms ease', style({ left: '0%'}))
        ])
      ]),
    ]),
  ]);