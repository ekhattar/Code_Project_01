<template>
	<div v-if="loadingMessage">
		<p style="text-align: center;">Wie ist die Hauptstadt?</p>
	    <br>
	    <br>
	    <ul>
	        <li class="ab"><button class="btn" @click="onClick('A')">A</button></li>
	        <li class="ab"><button class="btn" @click="onClick('B')">B</button></li>
	        <li class="ab"><button class="btn" @click="onClick('C')">C</button></li>
	        <li class="ab"><button class="btn" @click="onClick('D')">D</button></li>
	    </ul>
	</div>
</template>

<script>
	import {Event} from '../event.js'
	 export default {
	 	name: 'question',
	 	data() {
	 		return {
	 			name: 'question',
				question: {},
                loadingMessage: false,
				counter: 0
	 		}
	 	},
		props: ['onClick','questionsList'],
		 methods: {
			 check(answer) {
			     if(answer === this.question.rightAnswers) {
			         //Event
				 }
			 }
		 },

		 mounted() {

		 },

		 created() {
	 	    this.question = questionsList[0];
	 	    this.loadingMessage = true;
		 }
	}	
</script>

<style>
	
</style>