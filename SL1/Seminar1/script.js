const createVueApp = {
    data() {
        return {
            message: 'Hello Vue!',
            counter: 0,
            buybefore: 'Купить',
            buyAllowed: false,
            buyNotAllowed: false,
            showContent: false,
            randomNumber: 0,
            randomCreated: false,
        };
    },
    methods: {
        toCount() {
            if (this.counter < 1) {
                this.counter++;
                this.buybefore = 'Товар в корзине';
            };
        },
        createRandom(min, max) {
            this.randomCreated = true;
            if (this.randomCreated) {
                this.randomNumber = Math.floor(Math.random() * (10 + 1));
            }
        }
    },
};

Vue.createApp(createVueApp).mount('#app');