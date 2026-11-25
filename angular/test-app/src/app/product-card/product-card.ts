import { Component, input, output, Input, Output, EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Product } from '../product';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  // @Input({required: true}) product!: Product;
  readonly product = input.required<Product>();
  readonly addButtonLabel = input("Add to Cart");

  // @Output() addToCart = new EventEmitter<Product>;
  readonly addToCart = output<Product>();

  onAddToCart() {
    this.addToCart.emit(this.product())
  }

}
