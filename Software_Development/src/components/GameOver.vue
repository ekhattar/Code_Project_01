<template>
	<div class="container-gameover">
        <p class="text">Game Over!</p><br>
        <div class="score">
            <p>{{ score }}</p> 
            <p class="score-text">Final Score</p>
        </div>
        <div v-if="submitted"> {{ submitmsg }} </div>
        <input type="text" class="input" v-model="username" placeholder="Type a Nickname">
        <uiButton v-bind:onClick="() => {submitScore()}" title="Submit Score"></uiButton>
        <div v-if="inputError"> {{ inputErrorMsg }}</div>
        <router-link to="/welcome"><uiButton class="btn-bottom" title="Main Menu"></uiButton></router-link>    
    </div>
</template>

<style scoped lang="sass">

    .input
        background: none
        width: 327px
        height: 58px
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1)
        border-radius: 8px
        border: 4px solid #EDEDEE

        font-family: Source Sans Pro
        font-style: normal
        font-weight: bold
        line-height: normal
        font-size: 20px
        text-align: center
        color: #E1E1E1
        margin-bottom: 12px

    .container-gameover
        height: calc(100vh - 58px - 24px)
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

    .score
        width: calc(100% - 48px - 48px)
        background: linear-gradient(#E5AA47, #D4962E)
        border: 1px solid #F1BF69
        padding:
            top: 24px
            bottom: 24px
            left: 16px
            right: 16px
        text-align: center
        color: white
        font:   
            family: "Roboto Slab"
            size: 56px
            weight: bold
        letter-spacing: 1.2px
        border-radius: 6px
        margin-bottom: 48px
        p
            text-shadow: 0 2px 12px rgba(black, 0.25)

    .score-text
        text-shadow: none!important
        color: #9C6912
        margin-top: 16px
        font:
            size: 24px
            weight: normal

    .btn-bottom
        position: absolute
        bottom: 24px
        left: 50%
        transform: translateX(-50%)
        display: block
        
    .text
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 44px;
        color: #EDB453
        text-align: center;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        text-transform: uppercase
        letter-spacing: 1.2px
        margin-bottom: 16px

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
            url: "/quiz-result?",
            username: '',
            submitted: false,
            inputError: false,
            submitmsg: '',
            inputErrorMsg: '',
        };
    },
    props: ["onNextQuestion", "score"],
    methods: {
        submitScore() {
            if (this.username != '') {
                this.url = this.url + "points=" + this.score + "&name=" + this.username;
                Http.post(this.url)
                    .then( (response) => {
                        this.submitmsg = "You submitted your score sucessful to the Leaderboard";
                        this.submitted = true;
                    })
                    .catch( (error) => {
                        this.submitmsg = "Error! Please try again or contact the administrator";
                        this.submitted = true;
                    });
            } else {
                this.inputError = true;
                this.inputErrorMsg = 'You need to enter a Username to submit to the Leaderboard!'
            }        
        }
    },
};
</script>




