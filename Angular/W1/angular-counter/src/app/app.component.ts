import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CounterComponent} from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'First Angular app'
  logoSrc = "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
  counters: { name: string, id: number, aim: number }[] = [];
  aim = 5;
  isCompleted = false;
  counterCount = 0;

  countChanged(count: number) {
    if (count === this.aim) {
      this.isCompleted = true;
      alert('Goal reached')
    }

    if (count === 3) {
      this.aim = 10;
      // this.counter = {name: 'Clothes', id: 2}
    }
  }

  counterCountChanged() {
    const diff = this.counterCount - this.counters.length;
    if (diff > 0) {
      const newCounters = new Array(diff).fill(undefined).map((_, i) => ({
        name: '',
        id: i + this.counters.length,
        aim: 10
      }))
      this.counters = [...this.counters, ...newCounters]
    } else if (diff < 0) {
      this.counters.splice(this.counterCount);
    }
  }
}
