const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
      confirmInput(){
        this.confirmedName = this.name;
      },
      submitForm(event){
        event.preventDefault();
        alert('submitted!');
      },
      increment(num){
          this.counter = this.counter + num;
      },
      decrement(num){
          this.counter = this.counter - num;
      },
      setName(event){
          this.name = event.target.value;
      }
  }
});

app.mount('#events');
