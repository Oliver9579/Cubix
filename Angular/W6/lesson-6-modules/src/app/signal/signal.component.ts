import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: false,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  title = signal('Cubix');

  computedTitle = computed(() =>
    `${this.title()} ${new Date().toISOString()}`);

  constructor() {
    effect(() => {
      console.log(`Changed title ${this.title()}`)
    });
  }

  buttonClick() {
    console.log('Button clicked')
  }

}
