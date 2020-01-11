import { Injectable } from '@angular/core';
import { Item } from '../../components/item';

import { ITEMS } from './mock-items';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  items: Item[] = ITEMS;

  constructor() {
  }

  getItems(): any[] {
    return this.items;
  }

  getItem(id: any): any {
    const filteredItem = this.items.filter( item => item.id === id)[0];
    return filteredItem;
  }

}
