<template>
    <div v-if="isCounterStarted">
        <ul>
            <li v-if="false" class="life" v-for="life in lifes" v-text="life"></li>
            <li class="score">Score: {{ score }}</li>
        </ul>
        <div v-if="!isQuestionDone">
            <question v-bind:onClick="(arg) => {click(arg)}"></question>
        </div>
        <div v-else>
            <result v-bind:onNextQuestion="() => {nextQuestion()}"></result>
        </div>
    </div>

    <div v-else class="container1">
            <p>{{counter}}</p>
    </div>
</template>

<script>
import Result from './Result.vue';
import Question from './Question.vue';
    export default {
        name: 'ingame',
        components: {Result,
                    Question},
        props: ['questions'],
        data() {
            return {
                name: 'ingame',
                lifes: ['O', 'O', 'O'],
                score: 0,
                time: 15,
                isCounterStarted: false,
                isQuestionDone: false,
                counter: 3
            }
        },

        methods: {
            click(answer) {
                if(answer === 'A') {
                    this.isQuestionDone = true;
                }
            },
            nextQuestion() {
                this.isQuestionDone = false;
            }
        },

        mounted() {
        },

        created() {
            console.log(this.questions);
            setInterval(() => {
               // console.log(this.counter);
//                console.log('seconds');
                this.counter -= 1;
                //console.log(this.counter);
                if (this.counter === 0) {
                    console.log("HAPPY NEW YEAR!!");
                    this.isCounterStarted = true;
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