import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif',
  imports: [CommonModule],
  templateUrl: './ngif.html',
  styleUrl: './ngif.css',
})
export class Ngif {

  showMessage: boolean = true;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
