import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value: string = "Hello Angular";
  currentDate: Date = new Date();
  amount: number = 99999.99999;


}
