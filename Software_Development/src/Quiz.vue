<template>
  <div v-if="!loaded">
    <countdown v-if="display==='Countdown'"></countdown>
    <ingame v-if="display==='Ingame'" :questions="questions"></ingame>
    <result v-if="display==='Result'"></result>
  </div>
  <div v-else>
dfsdf
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue';
import Ingame from './components/Ingame.vue';
import Result from './components/Result.vue';
import {Event} from './event.js';
import HTTP from './http-rest.js';
export default {
  name: 'app',
  components: { Countdown,
                Ingame,
                Result },
  data () {
    
    return {
      msg: 'Welcome to Your Vue.js App',
      changeTemp: '',
      display: 'Ingame',
      loaded : true,
      questions:{}
    }
  },
  methods: {
      changetemp () {
        
        console.log(changeTemp)
        this.display = changeTemp;
      }
    },
  mounted() {
      Event.$on('change', (changeTemp) => {
        this.display = changeTemp;
      });

      let questionsIdGet = '?';
      for(let i = 0; i < 10;i++) {
          let number = Math.floor(Math.random() * (460 - 110) + 110);
          questionsIdGet = questionsIdGet + 'questionId=' + number + "&";
      }


      HTTP.get(`quiz-question`+questionsIdGet)
          .then(response => {
              // JSON responses are automatically parsed.
              //console.log(response.data);
              this.questions = response.data.questions;
              this.loaded = false;
              console.log(this.questions);
          })
          .catch(e => {
              this.errors.push(e)
          });
  },
  create: function() {
  }




}
</script>

<style>

</style>
