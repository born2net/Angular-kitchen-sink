import {
  AnimationEntryMetadata,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/core';

export const animations: Array<AnimationEntryMetadata> = [
  trigger('flyInOut', [
    state('in', style({transform: 'translateY(0)'})),
    transition('void => *', [
      style({transform: 'translateY(-100%)'}),
      animate(100)
    ]),
    state('out', style({transform: 'translateY(100%)'})),
    transition('* => void', [
      animate(100, style({transform: 'translateY(100%)'}))
    ])
  ])
];