<template>
	<div class="container-result">
        <p style="text-align: center" class="correct"><span class="white">Yeah that’s,</br></span> CORRECT!</p>
        <p style="text-align: center">You got {{ gain }} points!</p>
        
            <uiButton class="btn2" v-bind:onClick="onNextQuestion" title="Next Question"></uiButton>
        
    </div>
</template>

<script>
import { Event } from "../event.js";
import uiButton from "./ui_elements/Button.vue";
export default {
    name: "posresult",
    components: { uiButton },
    data() {
        return {
            name: "posresult"
        };
    },
    props: ["onNextQuestion", "onEndGame", "gain"]
};
</script>


<style lang="sass">
    .btn2
        position: absolute
        bottom: 24px
        left: 50%
        transform: translateX(-50%)
        display: block

    .correct
        /* Yeah that’s, CORRECT! */

        position: absolute;
        width: 260px;
        height: 98px;
        left: 59px;
        top: 164px;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 42px;
        text-align: center;

        color: #1FB363;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    .white
        color: #FFFFFF;
        font-weight: normal;
        font-size: 32px;

</style>