import { Injectable } from '@nestjs/common';
import { products } from './data/products';

@Injectable()
export class AppService {
  getProducts() {
    return products;
  }
  getProduct(id: string) {
    return products.find((product) => product.id == id);
  }
  buyProduct(id: string, amount: number) {
    const product = products.find((product) => product.id == id);
    product.amount -= amount;
    return product;
  }
}
