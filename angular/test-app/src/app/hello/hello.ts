import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  title = 'Hello World';
  isDisabled = true;

onClick() {
    this.isDisabled = !this.isDisabled;
 }

}
