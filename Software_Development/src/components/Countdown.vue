<template>
	<div>
		<h1>Quiz</h1>
		<button class="button" @click="changeTemp('Ingame')"> 
			 Start
		</button>
	</div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	data() {
	 		return {
	 			name: 'countdown',
	 			count: 3,
	 		}
	 	},
	 	methods: {
	 		changeTemp(destTemp) {
	 			Event.$emit('change',destTemp);
	 		}
	 	}
	 	
	 }
</script>

<style>
	.button {
  		font-size: 5em;
  	}	
</style>