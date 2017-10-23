<template>
	<div>
		<p>{{counter}}</p>
	</div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	data() {
	 		return {
	 			name: 'countdown',
	 			counter: 3,
	 		}
	 	},
	 	methods: {
	 		changeTemp(destTemp) {
	 			Event.$emit('change',destTemp);
	 		}
	 	},
	 	created() {
            setInterval(() => {
               // console.log(this.counter);
//                console.log('seconds');
                this.counter -= 1;
                //console.log(this.counter);
                if (this.counter <= 0) {
                    console.log("HAPPY NEW YEAR!!");
                    this.changeTemp('Ingame');
                }
            }, 1000);
        },
	 	
	 }
</script>

<style>
	.button {
  		font-size: 5em;
  	}	
</style>