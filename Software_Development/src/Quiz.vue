<template>
  <div>
    <countdown v-if="display==='Countdown'"></countdown>
    <ingame v-if="display==='Ingame'"></ingame>
    <test v-if="display==='Test'"></test>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue';
import Ingame from './components/Ingame.vue';
import Test from './components/Test.vue';
import {Event} from './event.js';
export default {
  name: 'app',
  components: { Countdown,
                Ingame,
                Test },
  data () {
    
    return {
      msg: 'Welcome to Your Vue.js App',
      changeTemp: '',
      display: 'Countdown',
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
