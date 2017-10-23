<template>
    <div v-if="isCounterStarted">
        <ul>
            <li v-if="false" class="life" v-for="life in lifes" v-text="life"></li>
            <li class="score">Score: {{ score }}</li>
        </ul>
        <div v-if="!isQuestionDone">
            <p style="text-align: center;">Wie ist die Hauptstadt?</p>
            <br>
            <br>
            <ul>
                <li class="ab"><button class="btn" @click="click('A')">A</button></li>
                <li class="ab"><button class="btn" @click="click('B')">B</button></li>
                <li class="ab"><button class="btn" @click="click('C')">C</button></li>
                <li class="ab"><button class="btn" @click="click('D')">D</button></li>
            </ul>
        </div>
        <div v-else>
            <p style="text-align: center">Correct Answer</p>

            <ul>
                <li>
                    <button class="normal" @click="nextQuestion()">Next Question</button>
                </li>
                <li>
                    <button class="normal">End Game</button>
                </li>
            </ul>
        </div>
    </div>

    <div v-else class="container1">

            <p>{{counter}}</p>

    </div>


</template>

<script>
    export default {
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

        created() {
            setInterval(() => {
               // console.log(this.counter);
//                console.log('seconds');
                this.counter -= 1;
                //console.log(this.counter);
                if (this.counter === -1) {
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