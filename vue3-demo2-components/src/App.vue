<template>
  <app-header></app-header>
  <app-content></app-content>
  <app-footer></app-footer>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
export default {
  name: 'App',
  components:{
    "app-header": Header,
    "app-footer": Footer,
    "app-content": Content,
  }
}
</script>

<style>

</style>
