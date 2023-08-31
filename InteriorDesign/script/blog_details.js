Vue.createApp({
	data() {
		return {
			tagFilter: 'Kitchen Planning',
			allArticles: [
				{
					id: 1,
					typeDesign: 'Kitchen',
					title: 'Let’s Get Solution For Building Construction Work #1',
					mainImgSrc: '../images/product1.png',
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #1',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo kitchen design',
					date: '26 December,2022',
				},
				{
					id: 2,
					typeDesign: 'Living',
					title: `Low Cost Latest Invented Interior Designing
                    Ideas. #1`,
					mainImgSrc: `../images/product2.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #2',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo living design',
					date: '22 December,2022',
				},
				{
					id: 3,
					typeDesign: 'Interior',
					title: 'Best For Any Office & Business Interior Solution #1',
					mainImgSrc: `../images/product3.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #3',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo interior design',
					date: '25 December,2022',
				},
				{
					id: 4,
					typeDesign: 'Kitchen',
					title: 'Let’s Get Solution For Building Construction Work #2',
					mainImgSrc: `../images/product4.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #4',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo kitchen design',
					date: '26 December,2022',
				},
				{
					id: 5,
					typeDesign: 'Living',
					title: 'Low Cost Latest Invented Interior Designing Ideas. #2',
					mainImgSrc: `../images/product5.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #5',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo living design',
					date: '22 December,2022',
				},
				{
					id: 6,
					typeDesign: 'Interior',
					title: 'Best For Any Office & Business Interior Solution #2',
					mainImgSrc: `../images/product6.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #6',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo interior design',
					date: '25 December,2022',
				},
				{
					id: 7,
					typeDesign: 'Bedroom',
					title: 'Low Cost Latest Invented Bedroom Designing Ideas.',
					mainImgSrc: `../images/product7.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #7',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo bedroom design',
					date: '21 December,2022',
				},
				{
					id: 8,
					typeDesign: 'Building',
					title: 'Best For Building Interior Solution',
					mainImgSrc: `../images/product8.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #8',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo building design',
					date: '23 December,2022',
				},
				{
					id: 9,
					typeDesign: 'Architecture',
					title: 'Best For Architecture Interior Solution',
					mainImgSrc: `../images/product9.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #9',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo architecture design',
					date: '27 December,2022',
				},
				{
					id: 10,
					typeDesign: 'Kitchen Planning',
					title: 'Let’s Get Solution For Kitchen Planning Work',
					mainImgSrc: `../images/image.png`,
					addImgSrc: `../images/image2.png`,
					firstParagraph:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					secondParagraph:
						'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
					subtitle: 'Design sprints are great #10',
					thirdParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					advantages: [
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					],
					forthParagraph:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					alt: 'photo kitchen planning design',
					date: '20 December,2022',
				},
			],
		};
	},
	methods: {
		changeActiveButton(newActivebutton) {
			const btn = document.querySelector('.content__tags_button-active');
			btn.classList.remove('content__tags_button-active');
			newActivebutton.classList.add('content__tags_button-active');
		},
		changeActiveTags(tag, event) {
			this.tagFilter = tag;
			this.changeActiveButton(event.target);
		},
	},
	computed: {
		sortedArticles() {
			return this.allArticles.filter(item => item.typeDesign === this.tagFilter);
		},
	},
})
	.component('bgdetails', {
		props: { article: Object },
		template: `
			<h2 class="content__articles_title">{{article.title}}</h2>
			<img :src="article.mainImgSrc" :alt="article.alt" class="content__articles_image">
			<div class="content__articles_posting-date content__posting-date">
				<time class="content__posting-date_date">{{article.date}}</time>
				<div class="content__posting-date_path">Interior / Home / Decore</div>
			</div>
			<p class="content__articles_main-info">{{article.firstParagraph}}</p>
			<p class="content__articles_main-info">{{article.secondParagraph}}</p>
			<div class="content__articles_quote-box article__quote-box">
				<svg class="article__quote-box_quote" width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z" fill="#CDA274"/>
					</svg>
				<p class="article__quote_text">The details are not the details. 
					They make the design.</p>   
			</div>
			<h2 class="content__articles_subtitle">{{article.subtitle}}</h2>
			<p class="content__articles_text">{{article.thirdParagraph}}</p>
			<ol class="content__articles_advantages">
				<li class="content__articles_advantage" v-for="(item, index) in article.advantages" :key="index">
				{{item}}
				</li>
			</ol>
			<img :src="article.addImgSrc" alt="design_photo" class="content__articles_image content__articles_image2">
			<p class="content__articles_info">{{article.forthParagraph}}</p>
		`,
	})
	.mount('#articles');