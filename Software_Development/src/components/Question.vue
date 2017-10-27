<template>
    <div v-if="loadingMessage">
	<div class="container-question">	
        <div class="question">
		    <p>{{question.questions}}</p>
        </div>
        <div class="container-answers">
            <div class="container-answer">           
                 <button class="btn-answer" v-bind:class="answerBGColor" @click="($event) => {checkAnswer(question.answers[0],$event) }">{{question.answers[0]}}</button>
            </div>
            <div class="container-answer">           
                <button class="btn-answer" v-bind:class="answerBGColor" @click="($event) => {checkAnswer(question.answers[1],$event)}">{{question.answers[1]}}</button>
            </div>
            <div class="container-answer">           
                <button class="btn-answer" v-bind:class="answerBGColor" @click="($event) => {checkAnswer(question.answers[2],$event)}">{{question.answers[2]}}</button>
            </div>
            <div class="container-answer">           
                <button class="btn-answer" v-bind:class="answerBGColor" @click="($event) => {checkAnswer(question.answers[3],$event)}">{{question.answers[3]}}</button>
            </div>
            <div class="container-timer">
                <span class="timer">{{timer}}</span>
            </div>
        </div>
	</div>
    </div>
</template>

<style scoped lang="sass">

    .container-question
        height: 100vh
        width: 100vw

    .question
        padding-left: 48px
        padding-right: 48px
        display: flex
        align-items: center
        justify-content: center
        height: calc(100vh - 100vw)

        p
            color: white
            font: 
                family: "Source Sans Pro"
                size: 24px
            line-height: 1.4

    .container-answers
        position: absolute
        bottom: 0
        left: 0
        right: 0
        height: 100vw
        display: flex
        flex-wrap: wrap
        padding: 12px

    .container-answer
        padding: 6px
        flex-basis: 50%
        height: 50%

    .btn-answer
        width: 100%
        height: 100%
        background: #EDEDEE
        border: none
        border-radius: 6px
        font:
            size: 18px
            family: "Source Sans Pro"
        padding: 16px
        transition: all 0.2s ease-out

        &.red
            background: #ED3964
            color: #EDEDEE
            border: 1px solid #F76286

        &.green
            background: #1AC066
            color: #EDEDEE
            border: 1px solid #59EF9E

        &:active, &:hover, &:focus
            outline: none
    
    .container-timer
        border-radius: 50px
        background: #323035
        width: 96px
        height: 96px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        display: flex
        justify-content: center
        align-items: center

    .timer
        font:
            size: 42px
            family: "Roboto Slab"
        background: -webkit-linear-gradient(#FDD07C, #DE9B32)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent

</style>

<script>
import { Event } from "../event.js";
import HTTP from '../http-rest.js';
export default {
    props: ['updateScore','firstQuestionList','updateQuestionList','questionCounter','timer'],
    name: "question",
    data() {
        return {
            name: "question",
            answerBGColor: "",
            question: {},
            loadingMessage: false,
            secondQuestionsList: []
        };
    },
    created() {
    },
    methods: {
        animateBackground: function (event, isSuccess) {
            isSuccess
                ? event.target.classList.add("green")
                : event.target.classList.add("red");
            setTimeout(() => {
                this.updateScore(isSuccess);
                this.question = this.firstQuestionList[this.questionCounter];

                console.log(this.question.rightAnswers);

                let diff = (this.firstQuestionList.length - 1) - this.questionCounter;
                console.log("checkAnswer");
                console.log(this.firstQuestionList.length);
                //if (diff < 8) {
                    this.getNextQuestions();
                //}
            }, 400);
        },
        checkAnswer(answer, event) {
            console.log("CheckAnswer");
            console.log(this.firstQuestionList.length);
            let isSuccess;

            if (answer === this.question.rightAnswers) {
                isSuccess = true;
            } else {
                isSuccess = false;
            }
            console.log(isSuccess);
            this.animateBackground(event, isSuccess);
        },
        getNextQuestions() {
            let questionsIdGet = '?';
            for (let i = 0; i < 10; i++) {
                let number = Math.floor(Math.random() * (460 - 110) + 110);
                questionsIdGet = questionsIdGet + 'questionId=' + number + "&";
            }

            HTTP.get(`quiz-question` + questionsIdGet)
                .then(response => {
                    // JSON responses are automatically parsed.
                    //console.log(response.data);
                    console.log(this.secondQuestionsList);
                    //this.secondQuestionsList = this.secondQuestionsList.concat(response.data.questions);
                    this.updateQuestionList(response.data.questions);
                    console.log("QuestionsList: ");
                    console.log(this.secondQuestionsList);
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
        mounted() {
            console.log("Create")
            this.question = this.firstQuestionList[this.questionCounter];
            this.loadingMessage = true;
        },
//        computed: {
//            allQuestionsList() {
//                return this.firstQuestionList.concat(this.secondQuestionsList);
//            }
//        }
}
</script>
