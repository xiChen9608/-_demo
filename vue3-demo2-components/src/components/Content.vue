<template>
    <div class="users">
        <ul>
            <li v-for="(user, index) in users" :key="index" @click="user.show = !user.show" >
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.position}}</h3>

            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'app-content',
        data() {
            return {
                "users" :[
                    {name: "chen xi", position: "Lucky", show: false},
                    {name: "chen xi", position: "Lucky", show: false},
                    {name: "chen xi", position: "Lucky", show: false},
                    {name: "chen xi", position: "Lucky", show: false},
                    {name: "chen xi", position: "Lucky", show: false},
                    {name: "chen xi", position: "Lucky", show: false},
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .users{
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        box-sizing: border-box;
        padding: 0 20px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        list-style-type: none;
    }
    li{
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid black;

    }
</style>
