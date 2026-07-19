import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() name!: string;
  @Output() callEvent = new EventEmitter<string>();
  call() {
    this.callEvent.emit(this.name);
  }
}
