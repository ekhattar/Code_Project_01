<template>
	<div>
        <p style="text-align: center">Game Over</p><br>
        <p style="text-align: center">Your Score is: {{ score }}</p>
        <uiButton onClick="() => {submitScore()}" title="Submit Score"></uiButton>
        <router-link to="/welcome"><uiButton title="Main Menu"></uiButton></router-link>    
    </div>
</template>

<style scoped lang="sass">

</style>

<script>
import Http from "../http-rest.js";
import { Event } from "../event.js";
import uiButton from "./ui_elements/Button.vue";
export default {
    name: "gameover",
    components: { uiButton },
    data() {
        return {
            name: "gameover",
            email: "timon@test",
            url: "/quiz-result?"
        };
    },
    props: ["onNextQuestion", "score"],
    methods: {
        submitScore() {
            console.log("Post");
            this.url =
                this.url + "points=" + this.score + "&email=" + this.email;
            Http.post(this.url)
                .then(function(response) {
                    path = "/leaderboard";
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
</script>
