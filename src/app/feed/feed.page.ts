import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/api/items.service';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})

export class FeedPage {
	items: any = [];
	
	constructor(private itemsService: ItemsService) {}

	ngOnInit() {
		this.items = this.itemsService.getItems();
	}

	openItem(index: number) {
	  console.log('TODO');
	}

	addItem() {
	  console.log('TODO addItem');
	}
}
