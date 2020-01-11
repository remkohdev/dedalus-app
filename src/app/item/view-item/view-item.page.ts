import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/api/items.service';
import * as _ from 'lodash';

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
	this.item = this.itemsService.getItem(this.itemId);
  }

  editItem() {
	console.log('TODO editItem');
  }

}
