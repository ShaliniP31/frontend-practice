import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {Hello} from './hello/hello';
// import {TestForm} from './test-form/test-form';
// import { TestSignal } from './test-signal/test-signal';
import { Header} from './header/header';
import { ProductGrid } from './product-grid/product-grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    // Hello,
    // TestForm
  // TestSignal
  Header,
  ProductGrid
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
