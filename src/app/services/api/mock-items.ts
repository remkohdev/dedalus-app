import { Item } from '../../components/item';

export const ITEMS: Item[] = [
	{
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
		published: {
		  month: 'January',
		  day: 3,
		  year: 2020
		},
		thumbnail: 'assets/imgs/2020/01/20200103-max_brueckner_otto_henning_richard_wagner_final_scene_of_goetterdaemmerung.jpg',
		text: ''
	},
	{
	  id: 2,
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
		day: 2,
		year: 2020
	  },
	  thumbnail: 'assets/imgs/2020/01/20200102-central-park-zoo-arsenal.jpg',
	  text: 'We went to see the bears today. On our way to the Grizzlies, we saw the Snow Monkeys and the Snow Leopards with their thick, long, furry tails. Afterward, we saw a short version of The Polar Express at the zoo\'s simple 4D theater.'
	},
	{
	  id: 3,
	  title: 'MACHINE HALLUCINATION by Refik Anadol',
	  subtitle: 'A mixed reality machine learning experiment with 300 million images',
	  persons: [
		'Blixa', 'Remko'
	  ],
	  topics: [
		'Art', 'Tech', 'New York, NY'
	  ],
	  categories: [
		'art', 'tech'
	  ],
	  labels: [
		'tech', 'machine learning', 'virtual reality'
	  ],
	  published: {
		month: 'January',
		day: 11,
		year: 2020
	  },
	  thumbnail: 'assets/imgs/2020/01/20200110-artechouse-nyc.png',
	  text: 'Machine Hallucination, Anadol’s first large-scale installation in New York City is a mixed reality experiment deploying machine learning algorithms on a dataset of over 300 million images—representing a wide-ranging selection of architectural styles and movements—to reveal the hidden connections between these moments in architectural history. As the machine generates a data universe of architectural hallucinations in 1025 dimensions, we can begin to intuitively understand the ways that memory can be spatially experienced and the power of machine intelligence to both simultaneously access and augment our human senses. By embedding photography with machine intelligence a new latent cinematic experience is born, one that narrates the fluid consciousness of a city and displays cultural information in a way that allows us to realize the complex fabric that unfolds our present realities.'
	}
];