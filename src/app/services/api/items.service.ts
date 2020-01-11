import { Injectable } from '@angular/core';
import { Item, PublishedDate } from '../../components/item';

import { ITEMS } from './mock-items';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  items: Item[] = ITEMS;

  constructor() {
	  console.log(this.items);
  }

  getItems(): any[] {
    return this.items;
  }

  getItem(id: any): any {
	console.log(`items.service.getItem for ${id}`);
	const filteredItem = this.items.filter( item => item.id == id)[0];
	console.log(`items.service.filteredItem:`);
	console.log(filteredItem);
    return filteredItem;
  }

}
