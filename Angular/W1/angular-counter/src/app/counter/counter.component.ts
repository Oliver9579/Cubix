import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() aim = 10;

  @Input({required: false}) counter?: { name: string, id: number }

  @Output() countChange = new EventEmitter<number>();

  count = 0;

  incrementCounter() {
    this.count = this.count + 1;
    this.countChange.emit(this.count);
  }

}
