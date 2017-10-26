<template>
	<div>
        <p style="text-align: center">Incorrect Answer</p>
        <p style="text-align: center">You lost 1 Life</p>
        <uiButton v-bind:onClick="onNextQuestion" title="Next Question"></uiButton>
    </div>
</template>

<style>

</style>

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

