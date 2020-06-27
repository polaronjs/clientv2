import { trigger, transition, style, animate, query } from '@polaron/shift';

export const animation = trigger('modal', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('100ms ease', style({ opacity: 1 })),
    query('.modal__body', [
      style({ opacity: 0, transform: 'translateY(100px)' }),
      animate(
        '150ms 100ms ease',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
    ]),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('100ms ease', style({ opacity: 0 })),
    query('.modal__body', [
      style({ transform: 'translateY(0)' }),
      animate('100ms ease', style({ transform: 'translateY(100px)' })),
    ]),
  ]),
]);
