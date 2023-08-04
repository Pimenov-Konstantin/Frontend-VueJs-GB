const createVueApp = {
    data() {
        return {
            productList: {
                id: 1,
                title: 'TV',
                price: 1500,
                url: 'https://aws-obg-image-lb-2.tcl.com/content/dam/brandsite/product/tv/p/p615/pc/product/EM_55P615_left_global.png',
            },
            discount: 0,
            users: [{
                    id: 1,
                    name: 'Alex',
                    age: 22,
                },
                {
                    id: 2,
                    name: 'Victor',
                    age: 25,
                },
                {
                    id: 3,
                    name: 'Kate',
                    age: 24,
                },
                {
                    id: 4,
                    name: 'John',
                    age: 42,
                },
                {
                    id: 5,
                    name: 'Alex',
                    age: 32,
                }
            ],
        };
    },
    methods: {
        random() {
            this.productList.price = this.productList.price - (Math.floor(Math.random() * 20) + 1);
        },
    },
};
Vue.createApp(createVueApp).mount('#app');