<template>
  <div v-if="!loaded">
    <countdown v-if="display==='Countdown'"></countdown>
    <ingame v-if="display==='Ingame'"></ingame>
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
    }
  },
  methods: {
      changetemp () {
        
        console.log(changeTemp)
        this.display = changeTemp;
      }
    },
  mounted() {

      console.log("Get Request");
      HTTP.get(`quiz-question?questionId=3&questionId=4&questionId=5`)
          .then(response => {
              // JSON responses are automatically parsed.
              console.log(response.data);
              this.loaded = false;
          })
          .catch(e => {
              this.errors.push(e)
          });

      Event.$on('change', (changeTemp) => {
        this.display = changeTemp;
      })
  },
  create: function() {
  }




}
</script>

<style>

</style>
