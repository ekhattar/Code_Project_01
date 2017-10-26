<template>
	<div>
		<h1>Welcome</h1>
		<router-link to="/quiz" class="buttonlink"> 
			 Play
		</router-link>
		<router-link to="/leaderboard" class="buttonlink"> 
			 Leaderboard
		</router-link>
	</div>
</template>

<script>
import Http from '../http-rest.js';
	import {Event} from '../event.js'
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
	 	},
	 	// mounted() {
	 	// 		   //quiz-question?questionId=3&questionId=4&questionId=5
	  //   Http.get(`/quiz-question?questionId=100`)
	  //   	.then(response => {
	  //     		//JSON responses are automatically parsed.
	  //     		//response.addHeader("Access-Control-Allow-Origin", "*");
	  //     		this.posts = response.data;
	  //     		console.log(this.posts)
	  //   	})
	  //   		.catch(e => {
	  //     		this.errors.push(e);
	  //   	})
		 	
		 // }
	}
</script>

<style scoped lang="sass">
    .buttonlink
        font-size: 40px

</style>