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
	// compares URL param string to number
	const filteredItem = this.items.filter( item => item.id == id)[0];
	console.log(`items.service.filteredItem:`);
	console.log(filteredItem);
    return filteredItem;
  }

  createItem(newItem: Item): number {
	console.log(`parent.createItem`);
	newItem.id = this.nextItemId();
	this.items.push(newItem);
	console.log(`items.length: ${ this.items.length } `);
	console.log(`new item created:`);
	console.log(newItem);
    return newItem.id;
  }

  nextItemId(): number {
	const maxItemId = this.items.reduce( (max, item) => ( item.id > max ) ? item.id : max, this.items[0].id );
	console.log(`maxId: ${ maxItemId }`);
	const newItemId = (maxItemId + 1);
	return newItemId;
  }

}
