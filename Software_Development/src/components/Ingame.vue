<template>
    <div v-if="isCounterStarted">
        <ul v-if="false">
            <li v-if="true" class="score">Lifes:<span v-for="n in (3-lifes)"> X</span><span v-for="n in lifes"> O</span></li>
            <li v-if="!gameOver" class="score">Current Score: {{ score }}</li>
            <li v-if="!isQuestionDone">Time: {{ timer }}</li>
            <li v-if="!isQuestionDone">Score to get {{ 100 + (Math.floor(this.timer/15*30)) }}</li> 
        </ul>
        <gameover v-if="gameOver" v-bind:score="score"></gameover>
        <timeover v-else-if="isOver" v-bind:onEndGame="() => {endGame()}" v-bind:onNextQuestion="() => {nextQuestion()}"></timeover>
        <transition v-else-if="!isQuestionDone" name="slideInLeft">
            <question v-bind:timer="timer" v-bind:onClick="(arg) => {click(arg)}"></question>
        </transition>
        <transition v-else-if="isRight" name="fade">
            <posresult v-bind:gain="gain" v-bind:onEndGame="() => {endGame()}" v-bind:onNextQuestion="() => {nextQuestion()}"></posresult>
        </transition>
        <transition v-else-if="!isRight" name="fade">
            <negresult v-bind:onEndGame="() => {endGame()}" v-bind:onNextQuestion="() => {nextQuestion()}"></negresult>
        </transition>
    </div>
    <div v-else class="container1">
        <p>{{ counter }}</p>
    </div>
</template>

<style scoped lang="sass">
    .slideInLeft-enter, .slideInLeft-enter-active,
        transition: all 0.3s ease-out
        transform: translateX(100%)
        opacity: 0
    .slideInLeft-leave, .slideInLeft-enter-to 
        transform: translateX(0%)
        opacity: 1
</style>

<script>
// [
//  {
//   'Who is he?',
//   [
//    {'Josef',false},
//    {'Max', false},
//    {'Elli',true},
//    {'Robin', false}
//   ]
//  }
// ]

import Posresult from "./PosResult.vue";
import Negresult from "./NegResult.vue";
import Timeover from "./TimeOver.vue";
import Question from "./Question.vue";
import Gameover from "./GameOver.vue";
export default {
    name: "ingame",
    components: {
        Posresult,
        Negresult,
        Timeover,
        Question,
        Gameover
    },
    data() {
        return {
            name: "ingame",
            lifes: 3,
            score: 0,
            gain: 0,
            timer: 99999,
            multiplier: 0,
            isCounterStarted: false,
            isQuestionDone: false,
            isRight: false,
            isOver: false,
            gameOver: false,
            counter: 3,
            answers: []
        };
    },

    methods: {
        click(answer) {
            if (answer === "A") {
                this.multiplier = this.timer / 15;
                console.log(this.multiplier);
                this.gain = 100 + Math.floor(30 * this.multiplier);
                this.score = this.score + this.gain;
                this.isQuestionDone = true;
                this.isRight = true;
            } else {
                this.isQuestionDone = true;
                this.isRight = false;
                this.lifes -= 1;
                if (this.lifes === 0) {
                    this.gameOver = true;
                }
            }
        },
        nextQuestion() {
            this.isQuestionDone = false;
            this.isOver = false;
            this.timer = 16;
            this.ingameTimer();
        },
        endGame() {
            this.gameOver = true;
            console.log("It is Over!!!");
        },
        ingameTimer() {
            //                console.log(this.timer)
            if (this.timer >= 2 && this.isQuestionDone === false) {
                this.timer -= 1;
                setTimeout(this.ingameTimer, 1000);
            } else if (this.isQuestionDone === false) {
                //                    console.log("HAPPY NEW YEAR");
                this.isQuestionDone = true;
                this.isOver = true;
            } else {
                this.timer = 0;
            }
        }
    },

    created() {
        setInterval(() => {
            // console.log(this.counter);
            //                console.log('seconds');
            this.counter -= 1;
            //console.log(this.counter);
            if (this.counter === 0) {
                console.log("HAPPY NEW YEAR!!");
                this.isCounterStarted = true;
                this.ingameTimer();
            }
        }, 1000);
    }
};
// [{frage1},{frage2}]
//frage1 : ['question',[{answer1},{answer2}]]
</script>
