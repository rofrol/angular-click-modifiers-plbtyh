import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  template: `
    <h3>Angular Click Modifiers</h3>

    <p>Click on the buttons while holding a modifier key down. Use CMD key instead of CTRL if you are on a Mac.</p>

    <button (click.shift)="log($event)">
      SHIFT + CLICK
    </button>

    <button (click.alt)="log($event)">
      ALT + CLICK
    </button>

    <button (click.ctrl)="log($event)">
      CTRL + CLICK
    </button>

    <button (click.shift.alt)="log($event)">
      SHIFT + ALT + CLICK
    </button>

    <button (click.shift.ctrl)="log($event)">
      SHIFT + CTRL + CLICK
    </button>

    <button (click.alt.ctrl)="log($event)">
      ALT + CTRL + CLICK
    </button>

    <button (click.shift.alt.ctrl)="log($event)">
      SHIFT + ALT + CTRL + CLICK
    </button>
  `,
  styles: [`button { display: block; margin: 0 0 1em }`],

})
export class AppComponent {
  log(event: MouseEvent) {
    console.log(event);
  }
}
