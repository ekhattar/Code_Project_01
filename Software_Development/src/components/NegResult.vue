<template>
	<div>
        <p style="text-align: center" class="incorrect"><span class="white">Sorry,</br></span> WRONG!</p>
        <p style="text-align: center">You lost 1 Life</p>
        <uiButton class="btn3" v-bind:onClick="onNextQuestion" title="Next Question"></uiButton>
    </div>
</template>



<script>
import { Event } from "../event.js";
import uiButton from "./ui_elements/Button.vue";

export default {
    name: "negresult",
    components: { uiButton },
    data() {
        return {
            name: "negresult"
        };
    },
    props: ["onNextQuestion", "onEndGame"]
};
</script>

<style lang="sass">
    .btn3
        position: absolute
        bottom: 24px
        left: 50%
        transform: translateX(-50%)
        display: block
    .incorrect
        /* Sorry, WRONG! */

        position: absolute;
        width: 237px;
        height: 98px;
        left: 69px;
        top: 164px;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 48px;
        text-align: center;
        color: #ED3964
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    .white
        color: #FFFFFF;
        font-size: 32px
        font-weight: normal;


</style>