<template>
  <div class="blog-bottom animated wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>{{title}}</h4>
    <div :key="item.url" v-for="item in list" class="product-go">
      <a href="single.html" class="fashion"><img class="img-responsive " :src="item.url" alt=""></a>
      <div class="grid-product">
        <a href="single.html" class="elit">{{item.title}}</a>
        <p>{{item.desc}}</p>
      </div>
      <div class="clearfix"> </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'list',
    'title'
  ]
}
</script>
<style>
</style>
