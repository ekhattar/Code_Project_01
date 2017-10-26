<template>
	<div>
        <p style="text-align: center">Game Over</p><br>
        <p style="text-align: center">Your Score is: {{ score }}</p>
        <ul>
            <li>
                <router-link to="/leaderboard">Submit Score</router-link>
            </li>
            <li>
                <router-link to="/welcome">Main Menu</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { Event } from "../event.js";
export default {
    name: "gameover",
    data() {
        return {
            name: "gameover"
        };
    },
    props: ["onNextQuestion", "score"]
};
</script>

<style>
.normal {
    width: 300px;
    height: 20px;
}
</style>