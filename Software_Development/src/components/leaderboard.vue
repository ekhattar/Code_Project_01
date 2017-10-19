<template>
	<div>
		<h1>Leaderboard</h1>
		<a href="/welcome" class="buttonlink"> 
			 Back
		</a>		
	</div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	data() {
	 		return {
	 			name: 'Leaderboard',
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