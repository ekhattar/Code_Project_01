<template>
  <div>
    <countdown v-if="display==='Countdown'"></countdown>
    <ingame v-if="display==='Ingame'"></ingame>
    <result v-if="display==='Result'"></result>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue';
import Ingame from './components/Ingame.vue';
import Result from './components/Result.vue';
import {Event} from './event.js';
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
    }
  },
  methods: {
      changetemp () {
        
        console.log(changeTemp)
        this.display = changeTemp;
      }
    },
  mounted () {
      Event.$on('change', (changeTemp) => {
        this.display = changeTemp;
      })
  }


}
</script>

<style>

</style>
