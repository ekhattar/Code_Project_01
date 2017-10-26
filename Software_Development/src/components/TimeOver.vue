<template>
	<div>
        <p style="text-align: center">Time ran out</p>
        <p style="text-align: center">You lost 1 Life</p>
        <ul>
            <li>
                <button class="normal" @click="onNextQuestion()">Next Question</button>
            </li>
            <li>
                <button type="button" class="normal" @click="onEndGame()">End Game</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { Event } from "../event.js";
export default {
    name: "timeover",
    data() {
        return {
            name: "timeover"
        };
    },
    props: ["onNextQuestion", "onEndGame"]
};
</script>

<style>
.normal {
    -webkit-appearance: button;
    width: 300px;
    height: 20px;
}
</style>