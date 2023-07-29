// Задачи по vue
// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.
// 2. есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
// 3. * При клике на элемент списка он должен быть удален. (по желанию)

Vue.createApp({
        data() {
            return {
                id: 1,
                list: [],
            };
        },
        methods: {
            reverseText(event) {
                // 1
                const textElement = event.target.textContent;
                event.target.textContent = [...textElement].reverse().join('');
            },
            addList() {
                // 2
                const string = `Новый элемент списка № ${this.id++}`;
                this.list.push(string);
            },
            removeElement(event) {
                // 3
                const targetElement = event.target;
                targetElement.remove();
            },
        },
    })
    .mount('#app');