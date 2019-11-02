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

// export const SliderAnimation =
//   trigger('routeAnimations', [
//     // Far Left Config
//     transition('isFarLeft => isLeft', slideTo('right') ),
//     transition('isFarLeft => isRight', slideTo('right') ),
//     transition('isFarLeft => isFarRight', slideTo('right') ),
//     // Far Right Config
//     transition('isFarRight => isLeft', slideTo('left') ),
//     transition('isFarRight => isRight', slideTo('left') ),
//     transition('isFarRight => isFarLeft', slideTo('left') ),
//     // Left Config
//     transition('isLeft => isRight', slideTo('right') ),
//     transition('isLeft => isFarRight', slideTo('right') ),
//     transition('isLeft => isFarLeft', slideTo('left') ),
//     // Right Config
//     transition('isRight => isLeft', slideTo('left') ),
//     transition('isRight => isFarRight', slideTo('right') ),
//     transition('isRight => isFarLeft', slideTo('left') ),
//     // Center Config
//     transition('isCenter => isLeft', slideTo('left') ),
//     transition('isCenter => isRight', slideTo('right') ),
//     transition('isLeft => isCenter', slideTo('right') ),
//     transition('isRight => isCenter', slideTo('left') ),
//   ]);

// function slideTo(direction) {
//   const optional = { optional: true };
  // return [
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       [direction]: 0,
  //       width: '100%'
  //     })
  //   ], optional),
  //   query(':enter', [
  //     style({ [direction]: '-100%'})
  //   ]),
  //   group([
  //     query(':leave', [
  //       animate('600ms ease', style({ [direction]: '100%'}))
  //     ], optional),
  //     query(':enter', [
  //       animate('600ms ease', style({ [direction]: '0%'}))
  //     ])
  //   ]),
  // ];
// }