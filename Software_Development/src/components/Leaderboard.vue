<template>
	<div>
		<h1>Leaderboard</h1>
		<ul>
			<p v-for="leader in leaders"><span>{{ leader.id }}#</span><span>{{ leader.name }}</span><span>Score: {{ leader.points }}</span></p>
		</ul> 
		<a href="/welcome" class="buttonlink"> 
			 Back
		</a>		
	</div>
</template>

<script>
	import Http from '../http-rest.js';
	import {Event} from '../event.js';
	 export default {
	 	data() {
	 		return {
	 			name: 'Leaderboard',
	 			leaders : ['Eins','Zwei']
	 		}
	 	},
	 	methods: {
	 		changeTemp(destTemp) {
	 			console.log("clicked")
	 			Event.$emit('change',destTemp);
	 			console.log(destTemp)
	 		}
	 	},
	 	created () {	
		 	Http.get(`/leaderboard`)
				.then((data) => {
					console.log(data.data);
					this.leaders = data.data.leaders;
					console.log(this.leaders)
					for (var i = 0; i < 10; i++)
		            {
//		            	console.log('In')
//		            	console.log(this.leaders)
//		            	console.log(this.leaders[i])
//		            	console.log('Type of leaders: '+typeof(data.leaders))
		               	this.leaders[i].id = i+1;
//		               	console.log(this.leaders[i].id)
//		               	console.log(data.leaders(i))
					};
					console.log(this.leaders)
					//this.leaders = response.data.leaders;
				})
				.catch(function (error) {
			    	console.log(error);
				});	
	 	}	 	
	 }
</script>

<style>
span {
	margin-right: 20px;
	box-sizing:  100px; 
}
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