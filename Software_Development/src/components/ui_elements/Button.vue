<script>
export default {
  props: ["title", "onClick", "main"]
};
</script>

<template>
    <button v-bind:class="{ main: main }" @click="onClick">{{title}}</button>    
</template>

<style scoped lang="sass">
    button
        border-radius: 10px
        font:
            size: 20px
            family: "Source Sans Pro"
            weight: 600
        padding:
            top: 16px
            bottom: 16px
            left: 40px
            right: 40px
        outline: none
        border: 3px solid #F7F1F9
        background: none
        color: #F7F1F9
        min-width: 294px
        display: block
        margin:
            left: auto
            right: auto
            bottom: 12px
        opacity: 0.8
    .main
        opacity: 1
        color: #A084FE
        border-color: #A084FE

</style>