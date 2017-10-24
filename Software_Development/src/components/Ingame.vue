<template>
    <div v-if="isCounterStarted">
        <ul>
            <li v-if="false" class="life" v-for="life in lifes" v-text="life"></li>
            <li v-if="!gameOver" class="score">Score: {{ score }}</li>
            <li v-if="!isQuestionDone">Time: {{ timer }}</li>
        </ul>
        <gameover v-if="gameOver" v-bind:score="score"></gameover>
        <timeover v-else-if="isOver" v-bind:onEndGame="() => {endGame()}" v-bind:onNextQuestion="() => {nextQuestion()}"></timeover>
        <question v-else-if="!isQuestionDone" v-bind:onClick="(arg) => {click(arg)}"></question>
        <posresult v-else-if="isRight" v-bind:onEndGame="() => {endGame()}" v-bind:onNextQuestion="() => {nextQuestion()}"></posresult>
        <negresult v-else-if="!isRight" v-bind:onEndGame="() => {endGame()}" v-bind:onNextQuestion="() => {nextQuestion()}"></negresult>
    </div>

    <div v-else class="container1">
            <p>{{ counter }}</p>
    </div>


</template>

<script>
import Posresult from './PosResult.vue';
import Negresult from './NegResult.vue';
import Timeover from './TimeOver.vue';
import Question from './Question.vue';
import Gameover from './GameOver.vue';
    export default {
        name: 'ingame',
        components: {Posresult,
                    Negresult,
                    Timeover,
                    Question,
                    Gameover},
        data() {
            return {
                name: 'ingame',
                lifes: ['O', 'O', 'O'],
                score: 0,
                timer: 16,
                isCounterStarted: false,
                isQuestionDone: false,
                isRight:false,
                isOver:false,
                gameOver:false,
                counter: 3,
                answers: [],
            }
        },

        methods: {
            click(answer) {
                if(answer === 'A') {
                    this.isQuestionDone = true;
                    this.isRight = true;
                    this.score+=1;
                } else {
                    this.isQuestionDone = true;
                    this.isRight = false;
                }

            },        
            nextQuestion() {
                this.isQuestionDone = false;
                this.isOver = false;
                this.timer= 16;
                this.ingameTimer();
            },
            endGame() {
                this.gameOver = true;
                console.log("It is Over!!!")
            },
            ingameTimer() {
                console.log(this.timer)
                if (this.timer >=2 && this.isQuestionDone === false) {
                    this.timer -=1;
                    setTimeout(this.ingameTimer, 1000);
                } else if (this.isQuestionDone === false) {
                    console.log("HAPPY NEW YEAR");
                    this.isQuestionDone = true;
                    this.isOver = true;
                } else {
                    this.timer = 0; 
                };
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
//                    setInterval(() => {
//                        this.timer -= 1;
//                        if (this.timer === 0) {
//                            console.log("HAPPY NEW YEAR");
//                            this.isQuestionDone= true;
//                            this.isOver= true;
//                            this.timer= 15;
//                        }
//                    }, 1000);
                }
            }, 1000);
        }
    }

</script>

<style>

    .normal {
        width: 300px;
        height: 20px;
    }

    .btn{
        width: 300px;
        height: 40px;
    }

    .ab {
        margin: 0;
        padding: 0;
    }
    div.container1 {
        height: 10em;
        position: relative
    }

    div.container1 p {
        margin: 0;
        background: yellow;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 100px;
    }

    li {
        font-size: 20px;
        text-align: center;
        margin-left: 0;
    }

    .life {
        width: 80px;
        margin: 10px;
    }

    .score {
    }

    .time {
        margin-left: 4em;
    }
</style>