<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>我的关注</h4>
    <ul class="popular">
      <li :key="item" v-for="item in list"><a href="#"><i class="glyphicon glyphicon-user"> </i>{{item}}</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: [
    'list'
  ]
}
</script>
<style>
</style>
