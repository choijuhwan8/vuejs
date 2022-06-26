const app = Vue.createApp({
    data() {
        return {
            name: 'Choi Juhwan',
            age: 22,
            imageUrl:'https://ichef.bbci.co.uk/news/976/cpsprodpb/C3B7/production/_123330105_gettyimages-1238389987.jpg'
        };
    },
    methods: {
        calculateAge(){
            return this.age + 5;
        },
        calculateRandom(){
            return Math.random();
        }
    }
});
app.mount('#assignment');