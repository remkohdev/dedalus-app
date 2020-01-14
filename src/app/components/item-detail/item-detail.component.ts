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
  @Output() deletePersonEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
	  console.log(`child.isEdit: ${this.isEdit}`);
  }

  editItem() {
	this.isEdit = true;
  }

  saveItem(value: string) {
	this.isEdit = false;
	this.saveItemEvent.emit(value);
	console.log('TODO child.saveItem');
	console.log(value);
  }

  deletePerson(value: string) {
	  console.log(value);
	  const index: number = this.item.persons.indexOf(value);
	  if (index !== -1) {
		this.item.persons.splice(index, 1);
	  } 
	  this.deletePersonEvent.emit(value);
  }
}
