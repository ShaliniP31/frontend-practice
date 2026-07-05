import { Component, signal } from '@angular/core';
import { Template } from './template/template'; 
import { Reactive } from './reactive/reactive';

@Component({
  selector: 'app-root',
  imports: [Template, Reactive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
