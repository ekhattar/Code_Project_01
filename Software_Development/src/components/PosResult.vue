<template>
	<div>
        <p style="text-align: center">Correct Answer</p>
        <p style="text-align: center">You got {{ gain }} points!</p>
        <ul>
            <uiButton v-bind:onClick="() => {onNextQuestion()}" title="Next Question"></uiButton>
        </ul>
    </div>
</template>

<script>
	import {Event} from '../event.js'
    import uiButton from "./ui_elements/Button.vue";
	 export default {
	 	name: 'posresult',
        components: {uiButton},
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