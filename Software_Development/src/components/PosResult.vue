<template>
	<div>
        <p style="text-align: center">Correct Answer</p>
        <p style="text-align: center">You got {{ gain }} points!</p>
        <ul>
            <li>
                <button class="normal" @click="onNextQuestion()">Next Question</button>
            </li>
            <li>
                <button type="button" class="normal" @click="onEndGame()">End Game</button>
            </li>
        </ul>
    </div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	name: 'posresult',
	 	data() {
	 		return {
	 			name: 'posresult',
	 		}
	 	},
		props: ['onNextQuestion',
				'onEndGame',
				'gain']
	}	
</script>

<style>
	.normal {
        width: 300px;
        height: 20px;
    }
</style>