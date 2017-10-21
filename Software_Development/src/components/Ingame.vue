<template>
	<div>
		<ul>
			<li class="life" v-for="life in lifes" v-text="life"></li>
			<li class="score">Score: {{ score }}</li>
			<li class="time">Time: {{ time }}</li>
		</ul>
	</div>
</template>

<script>
	 export default {
	 	data() {
	 		return {
	 			name: 'ingame',
	 			lifes: ['O','O','O'],
	 			score: 0,
	 			time: 15,
	 		}
	 	},

	 	methods: {
	 			
	 	}
	 }

</script>

<style>
	ul {
    	list-style-type: none;
    	margin: 0;
    	padding: 0;
    	height: 100px;
	}

	li {
		float:left;
		font-size: 100px;
	}

	.life {
		width: 80px;
		margin: 10px;
	}

	.score {
		margin-left: 4em;
	}

	.time {
		margin-left: 4em;
	}
</style>