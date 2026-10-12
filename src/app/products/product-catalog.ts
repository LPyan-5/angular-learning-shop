import { httpResource } from '@angular/common/http';
import { computed, Service, signal } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { API_URL } from '../apis';
import { ProductsResponse } from './product';

@Service()
export class ProductCatalog {
  query = signal<string>('')

  private readonly debouncedQuery = toSignal(
    toObservable(this.query).pipe(
      map(q => q.trim()),
      debounceTime(300),
      distinctUntilChanged(),
    ),
    { initialValue: '' },
  );

  onChange(term: string) {
    this.query.set(term)
  }
  
  readonly list = httpResource<ProductsResponse>(() => {
    const q = this.debouncedQuery().trim();

    return q
      ? `${API_URL}/products/search?q=${encodeURIComponent(q)}`
      : `${API_URL}/products?limit=12`;
  });

  readonly products = computed(() => (this.list.hasValue() ? this.list.value().products : []));
}