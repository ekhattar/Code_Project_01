<template>
	<div class="container-gameover">
        <div v-if="submitted" class="submit-msg-container"> 
            <div class="submit-msg">
                <p>{{ submitmsg }}</p>
                <router-link class="btn-small" to="/welcome">Main Menu</router-link>
                <router-link class="btn-small" to="/leaderboard">Leaderboard</router-link>
            </div>
        </div>
        <p class="text">Game Over!</p><br>
        <div class="score">
            <p>{{ score }}</p> 
            <p class="score-text">Final Score</p>
        </div>
        <input type="text" class="input" required v-model="username" placeholder="Type a Nickname">
        <div>
            <uiButton v-bind:onClick="() => {submitScore()}" title="Submit Score"></uiButton>
            <div v-if="inputError" class="input-error"> {{ inputErrorMsg }}</div>
        </div>
        <router-link to="/welcome"><uiButton class="btn-bottom" title="Main Menu"></uiButton></router-link>    
    </div>
</template>

<style scoped lang="sass">
    .submit-msg-container
        position: fixed
        background: rgba(black, 0.4)
        z-index: 2
        width: 100%
        height: 100%
        top: 0
        left: 0

    .submit-msg
        position: fixed
        padding: 32px
        padding-top: 48px
        padding-bottom: 48px
        background: white
        z-index: 2
        width: calc(100vw - 48px)
        border-radius: 6px
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        font:
            family: "Source Sans Pro"
            size: 18px
        line-height: 1.4
        p
            margin-bottom: 6px

    .btn-small
        padding: 16px
        background: #323035
        display: inline-block
        color: #EDEDEE
        text-decoration: none
        border-radius: 6px
        width: 100%
        text-align: center
        margin-top: 12px

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

    .input-error
        color: #ED3964
        position: absolute
        margin-top: 12px
        line-height: 1.3
        font:
            family: "Source Sans Pro"
            weight: 400


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
            username: "",
            submitted: false,
            inputError: false,
            submitmsg: "",
            inputErrorMsg: ""
        };
    },
    props: ["onNextQuestion", "score"],
    methods: {
        submitScore() {
            if (this.username != "") {
                this.url =
                    this.url +
                    "points=" +
                    this.score +
                    "&name=" +
                    this.username;
                Http.post(this.url)
                    .then(response => {
                        this.submitmsg =
                            "You submitted your score sucessful to the Leaderboard";
                        this.submitted = true;
                    })
                    .catch(error => {
                        this.submitmsg =
                            "Error! Please try again or contact the administrator";
                        this.submitted = true;
                    });
            } else {
                this.inputError = true;
                this.inputErrorMsg =
                    "You need to enter a Username to submit to the Leaderboard!";
            }
        }
    }
};
</script>




