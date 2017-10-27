<template>
	<div v-if="loadingMessage">
		<p style="text-align: center;">{{question.questions}}</p>
	    <br>
	    <br>
	    <ul>
	        <li class="ab"><button class="btn" @click="checkAnswer(question.answers[0])">{{question.answers[0]}}</button></li>
	        <li class="ab"><button class="btn" @click="checkAnswer(question.answers[1])">{{question.answers[1]}}</button></li>
	        <li class="ab"><button class="btn" @click="checkAnswer(question.answers[2])">{{question.answers[2]}}</button></li>
	        <li class="ab"><button class="btn" @click="checkAnswer(question.answers[3])">{{question.answers[3]}}</button></li>
	    </ul>
	</div>
</template>

<script>
	import {Event} from '../event.js'
    import HTTP from '../http-rest.js';
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
		props: ['updateScore','questionList'],
		 methods: {
			 checkAnswer(answer) {
			     if(answer === this.question.rightAnswers) {
					this.updateScore(true);
				 } else {
			         this.updateScore(false);
				 }
				 this.counter++;
				 this.question = this.questionList[this.counter];

                 let diff = (this.questionList.length-1) - this.counter;
                 console.log("checkAnswer");
                 console.log(this.questionList.length);
				 if(diff < 8) {
                     this.getNextQuestions();
				 }
			 },
			 getNextQuestions() {
                 let questionsIdGet = '?';
                 for(let i = 0; i < 10;i++) {
                     let number = Math.floor(Math.random() * (460 - 110) + 110);
                     questionsIdGet = questionsIdGet + 'questionId=' + number + "&";
                 }


                 HTTP.get(`quiz-question`+questionsIdGet)
                     .then(response => {
                         // JSON responses are automatically parsed.
                         //console.log(response.data);
						 console.log(this.questionList);
                         this.questionList = this.questionList.concat(response.data.questions);
                         console.log("QuestionsList: ");
                         console.log(this.questionList);
                     })
                     .catch(e => {
                         console.log(e);
                     });
			 }
		 },

		 mounted() {
             this.question = this.questionList[this.counter];
             this.loadingMessage = true;
		 },

		 created() {

		 }
	}	
</script>

<style>
	
</style>