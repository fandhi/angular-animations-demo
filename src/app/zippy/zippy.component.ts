import { Component, Input } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: 0, 
        paddingBottom: 0,
        paddingTop: 0,
        overflow: 'hidden',
        opacity: 0
      })),
      /* state('expanded', style({
        height: '*', 
        padding: '*',
        overflow: 'auto'
      })), */
      transition('collapsed => expanded', [
        animate('300ms ease-out', style({
          height: '*',
          paddingBottom: '*',
          paddingTop: '*'
        })),
        animate('1s', style({opacity: 1}))
      ]),
      transition('expanded => collapsed', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}
