<script>
export default {
    props: ["title","onClick","checkSubmit"]
};
</script>

<template>
	<button class="btn" @click="onClick" :disabled="checkSubmit">{{title}}</button>
</template>

<style scoped lang="sass">
    .btn
        background: #EDEDEE
        width: 327px
        height: 58px
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1)
        border-radius: 8px
        border: 0

        font-family: Source Sans Pro
        font-style: normal
        font-weight: bold
        line-height: normal
        font-size: 20px
        text-align: center
        color: #4D4941

</style>