import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard, MatIcon, MatInputModule, FormsModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {

  protected readonly products = signal<Product[]>(
    [
      {
        id: 1,
        name: 'Premium Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
        price: 199.99,
        originalPrice: 249.99,
      },
      {
        id: 2,
        name: 'Smart Fitness Watch',
        description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
        price: 299.99,
      },
      {
        id: 3,
        name: 'Portable Bluetooth Speaker',
        description: 'Compact speaker with powerful bass and 12-hour battery life.',
        price: 79.99,
        originalPrice: 99.99
      }
    ]
  );

  protected readonly searchTerm = signal('');
  protected readonly cartService = inject(CartService);
  clearSearch() {
    this.searchTerm.set('');
  }

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLocaleLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter((product) => product.name.includes(term)
      || product.description.includes(term))
  })

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
