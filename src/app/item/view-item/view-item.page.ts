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
	_.isEmpty(this.itemId) ? this.isEdit = true : this.isEdit = false;
  }

  ngOnInit() {
	console.log(`parent.getItem for ${this.itemId}`);
	this.item = this.itemsService.getItem(this.itemId);
	console.log(this.item);
  }

  saveItem(value: string) {
	console.log('TODO parent.savetItem');
	console.log(value);
  }

}
