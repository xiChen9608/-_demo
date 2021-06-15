<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: 'app-header',
        data() {
            return {
                title: "vue demo2"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        background-color: cadetblue;
        padding: 20px;
    }
    h1{
        text-align: center;
        color: #222;
    }
</style>
