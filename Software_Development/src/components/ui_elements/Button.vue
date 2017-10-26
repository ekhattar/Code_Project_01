<script>
export default {
    props: ["title","onClick"]
};
</script>

<template>
	<button @click="onClick">{{title}}</button>
</template>

<style scoped lang="sass">
    button
        background: pink
</style>