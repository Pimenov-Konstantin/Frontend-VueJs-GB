Vue.createApp({
    data() {
        return {
            product: {
                name: 'Iphone',
                description: '12 Pro Max',
                price: 1000,
                scrImg: 'https://c.dns-shop.ru/thumb/st1/fit/300/300/e8fe9e1b5b255552639f07d7ba45263f/484fb6e44a241d64529a90eb55a308448de7708fac05605635aafaf3a4a1619e.jpg',
                alt: 'photo-product'
            },
            disccountFlag: false,
        };
    },
    methods: {
        generateDiscount() {
            const discount = Math.floor(Math.random() * 20 + 1);
            this.product.price *= (100 - discount) / 100;
            this.disccountFlag = !this.disccountFlag;
        },
    },
}).mount('#app');