import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/api/items.service';
import * as _ from 'lodash';
import { Item, PublishedDate } from '../../components/item';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})

export class ViewItemPage implements OnInit {
  itemId: string;
  item: any;
  isEdit: boolean;

  constructor(
	  route: ActivatedRoute,
	  private itemsService: ItemsService
  ) {
	this.itemId = route.snapshot.params['id'];
	if ( _.isEmpty(this.itemId) ) {
		// create new item
		console.log(`new item`);
		const published = new PublishedDate();
		this.item = new Item(published);
		this.isEdit = true;
	 } else {
		console.log(`view item`);
		this.isEdit = false;
	 }
  }

  ngOnInit() {
	if ( ! _.isEmpty(this.itemId) ) {
		console.log(`parent.getItem for ${this.itemId}`);
		this.item = this.itemsService.getItem(this.itemId);
		console.log(this.item);
	} else {
		console.log(`parent.getItem no itemId`);
	}
  }

  saveItem(value) {
	if ( _.isEmpty(value.id) ) {
		this.itemsService.createItem(value);
	}
  }

  deletePerson(value: string) {
	console.log('TODO parent.deletePerson');
	console.log(value);
  }

}
