const app = Vue.createApp({
  data() {
    return{
      inputClass: '',
      toggleClass: true,
      inputBackgroundColor: ''
    };
  },
  methods: {
    togglePara() {
      this.togglePara = !this.togglePara;
    }
  },
  computed: {
    paraClasses(){
      return{
      visible: this.togglePara,
      hidden: !this.togglePara
    }
  }
  }
});

app.mount('#assignment')