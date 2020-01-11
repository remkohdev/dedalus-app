import { Component, OnInit, Input } from '@angular/core';
import { Item, PublishedDate } from '../item';
import { ItemsService } from '../../services/api/items.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})

export class ItemDetailComponent implements OnInit {
  @Input() item: Item;
  @Input() isEdit: boolean;
  @Output() saveItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
	console.log('TODO child.item');
	console.log(this.item);
  }

  editItem() {
	console.log('TODO editItem');
	this.isEdit = true;
  }

  saveItem(value: string) {
	console.log('TODO child.saveItem');
	console.log(value);
	this.isEdit = false;
	this.saveItemEvent.emit(value);
  }

}
