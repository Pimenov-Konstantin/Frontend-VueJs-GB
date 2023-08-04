Vue.createApp({
	data() {
		return {
			articles: [
				{
					id: 1,
					typeDesign: 'Kitchen Design',
					title: 'Let’s Get Solution For Building Construction Work',
					date: '26 December,2022',
					imgSrc: '../images/product5.png',
				},
				{
					id: 2,
					typeDesign: 'Living Design',
					title: `Low Cost Latest Invented Interior Designing \n Ideas.`,
					date: '22 December,2022',
					imgSrc: `../images/product8.png`,
				},
				{
					id: 3,
					typeDesign: 'Interior Design',
					title: 'Best For Any Office & Business Interior \n Solution',
					date: '25 December,2022',
					imgSrc: `../images/product9.png`,
				},
				{
					id: 4,
					typeDesign: 'Kitchen Design',
					title: 'Let’s Get Solution For Building Construction Work',
					date: '26 December,2022',
					imgSrc: `../images/product10.png`,
				},
				{
					id: 5,
					typeDesign: 'Living Design',
					title: 'Low Cost Latest Invented Interior Designing \n Ideas.',
					date: '22 December,2022',
					imgSrc: `../images/product11.png`,
				},
				{
					id: 6,
					typeDesign: 'Interior Design',
					title: 'Best For Any Office & Business Interior \n Solution',
					date: '25 December,2022',
					imgSrc: `../images/product12.png`,
				},
			],
		};
	},
	methods: {
		reverseText(event) {
			// задание 1
			const textEl = event.target.textContent;
			event.target.textContent = [...textEl].reverse().join('');
		},
	},
}).mount('#articles');