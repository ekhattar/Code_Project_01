<template>
	<div>
        <p style="text-align: center">Game Over</p><br>
        <p style="text-align: center">Your Score is: {{ score }}</p>
        <ul>
            <li>
                <button class="normal" @click="submitScore">Submit Score</button>
            </li>
            <li>
                <a href="/welcome"><button type="button" class="normal">Main Menu</button></a>
            </li>
        </ul>
    </div>
</template>

<script>
	import Http from '../http-rest.js';
	import {Event} from '../event.js';
	export default {
	 	name: 'gameover',
	 	data() {
	 		return {
	 			name: 'gameover',
	 			email: 'timon@test',
	 			url: '/quiz-result?',
	 		}
	 	},
		props: ['onNextQuestion',
				'score'],
		methods: {
			submitScore () {
				console.log('Post')
				this.url = this.url + 'points='+this.score+'&email='+this.email;
				Http.post(this.url)
				.then(function (response) {
				    console.log(response);
				    path = '/leaderboard';
				})
				.catch(function (error) {
				    console.log(error);
				});
			},

		}
	}	
</script>

<style>
	.normal {
        width: 300px;
        height: 20px;
    }
</style>