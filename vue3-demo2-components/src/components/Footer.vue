<template>
    <footer>
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
    export default {
        name: 'app-footer',
        data(){
            return {
                "copyright": "Copyright 2021.06.15"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    background-color: #222;
    padding: 5px;
}
    p{
        color: aliceblue;
        text-align: center;
    }
</style>
