import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product';
import { CartItem } from './cart-item';
@Injectable({
  providedIn: 'root',
})
export class CartService {

  private readonly cartItems = signal<CartItem[]>([]);
  readonly cartCount = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  addToCart(product: Product) {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...items, { product, quantity: 1 }];
      }
    });
  }
}
