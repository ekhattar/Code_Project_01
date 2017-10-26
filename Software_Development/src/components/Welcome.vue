<template>
	<div>
		<h1>Welcome</h1>
		<a href="/quiz" class="buttonlink"> 
			 Play
		</a>
		<a href="/leaderboard" class="buttonlink"> 
			 Leaderboard
		</a>
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

<style>
a.buttonlink:link, a.buttonlink:visited, a.buttonlink:hover, a.buttonlink:active
{
 font-family:Arial;
 font-size:14px;
 text-align:center;
 text-Decoration: none;
 width:100px;
 height:20px;
 padding:3px;
}
a.buttonlink:link, a.buttonlink:visited
{
 color:#000000;
 background-color:#bcbcbc;
 border-left:2px solid #efefef;
 border-top:2px solid #efefef;
 border-right:2px solid #000000;
 border-bottom:2px solid #000000;
}
a.buttonlink:hover, a.buttonlink:active
{
 color:#ffffff;
 background-color:#5555aa;
 border-left:2px solid #efefff;
 border-top:2px solid #efefff;
 border-right:2px solid #000055;
 border-bottom:2px solid #000055;
}
a.buttonlink {
	display: block;margin-top: 20px;
}
</style>