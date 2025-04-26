import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() aim = 5;

  @Input({required: false}) counter?: { name: string, id: number }

  @Output() countChange = new EventEmitter<number>();

  @ViewChild('btn') buttonRef?: ElementRef<HTMLButtonElement>;

  count = 0;
  changeDetectionCounter = 0;

  constructor() {
  }

  incrementCounter() {
    this.count = this.count + 1;
    this.countChange.emit(this.count);
  }

  get log() {
    this.changeDetectionCounter++;
    // console.log(this.changeDetectionCounter);
    return 'change detection test'
  }

  get isComplete() {
    return this.count >= this.aim;
  }
}
