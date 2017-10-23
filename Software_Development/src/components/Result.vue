<template>
	<div>
        <p style="text-align: center">Correct Answer</p>
        <ul>
            <li>
                <button class="normal" @click="onNextQuestion()">Next Question</button>
            </li>
            <li>
                <button class="normal">End Game</button>
            </li>
        </ul>
    </div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	name: 'result',
	 	data() {
	 		return {
	 			name: 'result',
	 		}
	 	},
		props: ['onNextQuestion']
	}	
</script>

<style>
	
</style>