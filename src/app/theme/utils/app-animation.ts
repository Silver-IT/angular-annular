import {trigger, state, stagger, animate, style, query, transition, keyframes} from '@angular/animations';

export const blockTransition = trigger('blockTransition', [
    transition(':enter', [
        query('.block', style({ opacity: 0 }),{ optional: true }),
        query('.block', stagger(150, [
            style({ transform: 'translateY(100px)' }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
        ]),{ optional: true }),
    ]),
    transition(':leave', [
        query('.block', stagger(100, [
            style({ transform: 'translateY(0px)', opacity: 1 }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
        ]),{ optional: true }),        
    ])
]);

export const listTransition = trigger('listTransition', [
    transition(':enter', [
        query('.list', style({ opacity: 0 }),{ optional: true }),
        query('.list', stagger('300ms',[
            animate('1s ease-in', keyframes([
                style({
                    opacity: 0, transform: 'translateY(-75px)', offset: 0
                }),
                style({
                    opacity: .5, transform: 'translateY(35px)', offset: 0.3
                }),
                style({
                    opacity: 1, transform: 'translateY(0)', offset: 1
                })
            ]))
        ]),{ optional: true })
    ]),
    transition(':leave', [
        query('.list', stagger('300ms',[
            animate('1s ease-in', keyframes([
                style({
                    opacity: 1, transform: 'translateY(0)', offset: 0
                }),
                style({
                    opacity: .5, transform: 'translateY(35px)', offset: 0.3
                }),
                style({
                    opacity: 0, transform: 'translateY(-75px)', offset: 1
                })
            ]))
        ]),{ optional: true })
    ])
]);


export const rotate = trigger('rotate', [
    state('1', style({ transform: 'rotate(180deg)' })),
    state('0', style({ transform: 'rotate(0deg)' })),
    transition('1 => 0', animate('300ms')),
    transition('0 => 1', animate('300ms'))
]);