<template>
	<div class="container-question">	
        <div class="question">
		    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor?</p>
        </div>
        <div class="container-answers">
            <div class="container-answer">           
                 <button class="btn-answer" v-bind:class="answerBGColor" @click="($event) => {animateBackground($event, true, 'A')}"> Timon Blubsdsa sdasj</button>
            </div>
            <div class="container-answer">           
                <button class="btn-answer" v-bind:class="answerBGColor" @click="($event) => {animateBackground($event, false, 'B')}">bla blubber dfdsu asdas</button>
            </div>
            <div class="container-answer">           
                <button class="btn-answer" v-bind:class="answerBGColor" @click="($event) => {animateBackground($event, false, 'C')}">lorme ipsum dolro sit</button>
            </div>
            <div class="container-answer">           
                <button class="btn-answer" v-bind:class="answerBGColor" @click="($event) => {animateBackground($event, false, 'D')}">wdehwfuhfef</button>
            </div>
            <div class="container-timer">
                <span class="timer">{{timer}}</span>
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
export default {
    props: ["onClick", "timer"],
    name: "question",
    data() {
        return {
            name: "question",
            answerBGColor: ""
        };
    },
    created() {},
    methods: {
        animateBackground: function(event, answer, click) {
            answer
                ? event.target.classList.add("green")
                : event.target.classList.add("red");
            setTimeout(() => {
                this.onClick(click);
            }, 1000);
        }
    }
};
</script>
