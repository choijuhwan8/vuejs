const app = Vue.createApp({
  data(){
    return{
    counter: 0,
    alert: ''
    };
  },
  methods:{
    addNumber(num){
      this.counter = this.counter + num;
    }
  },
  computed: {
    result(){
      if(this.counter < 37){
        return 'Not there yet!';
      }
      else if(this.counter > 37){
        return 'Too Much';
      }
      else{
        return this.counter;
      }
    }
  },
  watch: {
    result(){
      const that = this;
      setTimeout(function(){
        that.counter = 0;
      }, 5000)}
  }
});

app.mount('#assignment');