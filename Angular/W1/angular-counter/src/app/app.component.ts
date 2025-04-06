import {Component} from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'First Angular app'
  logoSrc = "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
  counter = {name: 'Dishes', id: 1}
  aim = 5;

  countChanged(count: number) {
    if (count === this.aim) {
      alert('Goal reached')
    }

  }
}
