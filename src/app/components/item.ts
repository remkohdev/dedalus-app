import * as _ from 'lodash';

export class Item {
	id: number;
	title: string;
	subtitle: string;
	persons: Array<string>;
	topics: Array<string>;
	categories: Array<string>;
	labels: Array<string>;
	published: PublishedDate;
	thumbnail: string;
	text: string;

	constructor(published?: PublishedDate) {
		if ( _.isEmpty(published) ) {
			this.published = new PublishedDate();
		}else{
			this.published = published;
		}
    }
}

export class PublishedDate {
	monthName: string;
	month: number;
	day: number;
	year: number;

	constructor() {
		const d = new Date();
		this.month = d.getMonth() + 1;
		this.day = d.getDay();
		this.year = d.getFullYear();
		this.monthName = d.toLocaleString('default', { month: 'long' });
		console.log(`monthName: ${this.monthName}`);
	}
}