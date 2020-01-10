import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/api/items.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})

export class ViewItemPage implements OnInit {
  itemId: string;
  item: any;

  constructor(
	  route: ActivatedRoute,
	  private itemsService: ItemsService
  ) {
	this.itemId = route.snapshot.params['id'];
  }

  ngOnInit() {
	this.item = this.itemsService.getItem(this.itemId);
	console.log(this.item);
  }

  editItem() {
	console.log('TODO editItem');
  }

}
