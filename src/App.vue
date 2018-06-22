<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './js/jquery.min'
import './js/easing'
import './js/move-top'
import './js/wow.min'

export default {
  name: 'App'
}
</script>

<style>
@import "./css/animate.min.css";
@import "./css/bootstrap.css";
@import "./css/component.css";
@import "./css/font-awesome.css";
@import "./css/styles.css";
@import "./css/style.css";
@import "./css/upload.css";
@import "./css/share.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
