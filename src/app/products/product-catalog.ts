import { Service } from '@angular/core';

@Service()
export class ProductCatalog {
  readonly products = [
    { id: 1, name: 'Helmet', price: 49.9 },
    { id: 2, name: 'Gloves', price: 19.5 },
    { id: 3, name: 'Bike light', price: 12 },
  ];

  getById(id: number) {
    return this.products.find(p => p.id === id);
  }
}