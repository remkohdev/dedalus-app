import { Component, OnInit } from '@angular/core';
import { Item, PublishedDate } from '../../item/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})

export class ItemDetailComponent implements OnInit {
  published: PublishedDate = {
	month: 'January',
	day: 3,
	year: 2020
  };

  item: Item = {
	id: 1,
	title: 'Götterdämmerung, Richard Wagner',
	subtitle: 'Twilight of the Gods, Ring of the Nibelung',
	persons: [
	  'Remko'
	],
	topics: [
	  'Richard Wagner'
	],
	categories: [
	  'music'
	],
	labels: [
	  'opera'
	],
	published: this.published,
	thumbnail: 'assets/imgs/2020/01/20200103-max_brueckner_otto_henning_richard_wagner_final_scene_of_goetterdaemmerung.jpg',
	text: ''
};

  constructor() { }

  ngOnInit() {}

}
