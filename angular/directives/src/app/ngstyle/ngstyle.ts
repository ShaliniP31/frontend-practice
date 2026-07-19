import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ngstyle',
  imports: [CommonModule, FormsModule],
  templateUrl: './ngstyle.html',
  styleUrl: './ngstyle.css',
})
export class Ngstyle {
  fontSize: number = 16;
  fontColor: string = 'orange'
}
