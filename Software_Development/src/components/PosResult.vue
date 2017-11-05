<template>
	<div class="container-result">
        <div class="currentscore-container">
            <p>{{score}}</p>
            <p>Current Score</p>
        </div>
        <p style="text-align: center" class="correct"><span class="white">{{currentText}}</br></span> CORRECT</p>
        <div class="points"> + {{ gain }} Points!</div>
        <uiButton class="btn2" v-bind:onClick="onNextQuestion" title="Next Question"></uiButton>
    </div>
</template>

<style lang="sass">

    .currentscore-container
        position: absolute
        top: 48px
        width: 100%
        color: #EDEDEE
        text-align: center
        font: 
            size: 16px
            family: "Source Sans Pro"
        
        p
            opacity: 0.8
            margin-bottom: 8px
            &:first-child
                opacity: 1
                font: 
                    size: 32px
                    family: "Roboto Slab"

    .container-result
        height: calc(100vh - 58px - 24px)
        display: flex
        justify-content: center
        flex-direction: column

    .points
        width: calc(100% - 48px - 48px)
        background: linear-gradient(#45D989, #1FB363)
        border: 1px solid #7CFCB8
        margin-left: auto
        margin-right: auto
        padding:
            top: 24px
            bottom: 24px
            left: 16px
            right: 16px
        text-align: center
        color: white
        font:   
            family: "Roboto Slab"
            size: 32px
            weight: bold
        letter-spacing: 1.2px
        border-radius: 6px

    .btn2
        position: absolute
        bottom: 24px
        left: 50%
        transform: translateX(-50%)
        display: block

    @keyframes scaleIn
        0%
            transform: scale(3)
        70%
            transform: scale(0.85)
        100%
            transform: scale(1)

    .correct
        animation: scaleIn
        animation-duration: 0.4s
        animation-easing: easeInOutQuad

        margin-bottom: 48px

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 48px;
        text-align: center;
        letter-spacing: 1.2px

        color: #1FB363;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    .white
        color: #FFFFFF;
        font-weight: normal;
        font-size: 28px;

</style>

<script>
import { Event } from "../event.js";
import uiButton from "./ui_elements/Button.vue";
export default {
    name: "posresult",
    components: { uiButton },
    data() {
        return {
            name: "posresult",
            texts: [
                "Yeah that's",
                "You rock!",
                "Well done!",
                "Congrats!",
                "Nice!"
            ],
            currentText: ""
        };
    },
    props: ["onNextQuestion", "onEndGame", "gain", "score"],
    mounted: function() {
        const rand = Math.floor(Math.random() * this.texts.length);
        console.log(rand);
        this.currentText = this.texts[rand];
    }
};
</script>
