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
}

export class PublishedDate {
	month: string;
	day: number;
	year: number;
}