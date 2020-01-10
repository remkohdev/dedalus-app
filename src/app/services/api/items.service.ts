import { Injectable } from '@angular/core';

const items = [
	{
		id: '1',
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
		published: {
		  month: 'January',
		  day: '3',
		  year: '2020'
		},
		thumbnail: 'assets/imgs/2020/01/20200103-max_brueckner_otto_henning_richard_wagner_final_scene_of_goetterdaemmerung.jpg',
		text: ''
	},
	{
	  id: '2',
	  title: 'Central Park Zoo',
	  subtitle: 'Grizzly Bear, Snow Monkey, Snow Leopard',
	  persons: [
		'Blixa', 'Emily', 'Remko'
	  ],
	  topics: [
		'Grizzly Bear', 'Snow Monkey', 'Snow Leopard', 'Zoo', 'New York, NY'
	  ],
	  categories: [
		'nature'
	  ],
	  labels: [
		'nature'
	  ],
	  published: {
		month: 'January',
		day: '2',
		year: '2020'
	  },
	  thumbnail: 'assets/imgs/2020/01/20200102-central-park-zoo-arsenal.jpg',
	  text: 'We went to see the bears today. On our way to the Grizzlies, we saw the Snow Monkeys and the Snow Leopards with their thick, long, furry tails. Afterward, we saw a short version of The Polar Express at the zoo\'s simple 4D theater.'
	}
];

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  constructor() { }

  getItems(): any[] {
	return items;
  }

  getItem(id: any): any {
	const filteredItem = items.filter( item => item.id === id)[0];
	return filteredItem;
  }

}
