import { Component } from '@angular/core';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Child, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = ''
  retName = ''

  call(event:string){
    this.retName = event
  }
}
