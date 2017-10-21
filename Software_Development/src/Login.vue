<template>
	<div>
		<h1>Quiz App - CODE</h1>
		<h2>Login</h2>
		<form action="/welcome" v-on:submit.prevent method="POST">
			<input type="text" name="username" placeholder="Username" required>
			<input type="password" name="password" placeholder="Password" required>
		</form>
		<form action="/welcome">
			<input type="submit">
		</form>
	</div>
</template>

<script>
	import {Event} from './event.js'
	 export default {
	 	data() {
	 		return {
	 			name: 'welcome',
	 		}
	 	},
	 	methods: {
	 		changeTemp(destTemp) {
	 			console.log("clicked")
	 			Event.$emit('change',destTemp);
	 			console.log(destTemp)
	 		}
	 	}
	 	
	 }
</script>

<style>
	
</style>