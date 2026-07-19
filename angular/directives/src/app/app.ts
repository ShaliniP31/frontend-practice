import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ngif } from './ngif/ngif';
import { Ngstyle } from './ngstyle/ngstyle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ngif, Ngstyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directives');
}
