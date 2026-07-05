import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  submitForm() {
    console.log("Form submitted")
  }
}
