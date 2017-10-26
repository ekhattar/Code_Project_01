<template>
	<div>
        <p style="text-align: center">Incorrect Answer</p>
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
	 	name: 'negresult',
	 	data() {
	 		return {
	 			name: 'negresult',
	 		}
	 	},
		props: ['onNextQuestion',
				'onEndGame']
	}	
</script>

<style>
	.normal {
        width: 300px;
        height: 20px;
    }
</style>