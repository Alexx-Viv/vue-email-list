Vue.config.devtools = true;

console.log('collegato', Vue);

const app = new Vue({
  el: '#app',
  data: {
    length: 0,
    emailList: [],
  },
  created() {
    for (this.length = 0; this.length < 10; this.length++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          this.emailList.push(res);
        });
    }
  },
});
