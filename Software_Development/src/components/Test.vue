<template>
	<div>
		<button @click="changeTemp"> 
			Countdown
		</button>
	</div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	data() {
	 		return {
	 			name: 'test',
	 		}
	 	},
	 	methods: {
	 		changeTemp() {
	 			console.log("clicked")
	 			Event.$emit('change','Countdown');
	 		}
	 	}
	 	
	 }
</script>

<style>
	.button	{ width: 50%; height: 25%; }	
</style>