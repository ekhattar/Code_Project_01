<template>
	<div>
        <p style="text-align: center">Game Over</p><br>
        <p style="text-align: center">Your Score is: {{ score }}</p>
        <ul>
            <li>
                <a href="/leaderboard"><button class="normal">Submit Score</button></a>
            </li>
            <li>
                <a href="/welcome"><button type="button" class="normal">Main Menu</button></a>
            </li>
        </ul>
    </div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	name: 'gameover',
	 	data() {
	 		return {
	 			name: 'gameover',
	 		}
	 	},
		props: ['onNextQuestion',
				'score']
	}	
</script>

<style>
	.normal {
        width: 300px;
        height: 20px;
    }
</style>