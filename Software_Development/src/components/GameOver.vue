<template>
	<div class="container-gameover">
        <p style="text-align: center" class="GO">Game Over!</p><br>
        <p style="text-align: center" class="score">Your Score is: {{ score }}</p>
        <uiButton class="btn5" onClick="() => {submitScore()}" title="Submit Score"></uiButton>
        <router-link to="/welcome"><uiButton title="Main Menu"></uiButton></router-link>    
    </div>
</template>

<style scoped lang="sass">
    .btn5
       margin: 12px

    .container-gameover
        text-align: center
        top: 50%
        position: absolute
        transform: translateY(-50%)
    .GO
        /* GAME OVER */
        width: 274px;
        height: 67px;
        display: block
        margin-left: auto
        margin-right: auto
        top: 120px;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        line-height: 67px;
        font-size: 46px;
        color: #EDB453
        text-align: center;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    
    .score
        /* Final Score */

        position: absolute;
        width: 129px;
        height: 35px;
        left: 123px;
        top: 272px;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: normal;
        line-height: 35px;
        font-size: 24px;
        text-align: center;
        color: #9C6912;


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




