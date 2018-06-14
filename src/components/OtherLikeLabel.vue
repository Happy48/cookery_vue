<template>
  <div class="blog-bottom animated wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>{{title}}</h4>
    <div :key="item.foodPic" v-for="item in list" class="product-go">
      <a href="single.html" class="fashion"><img class="img-responsive " :src="item.foodPic" alt=""></a>
      <div class="grid-product">
        <a href="single.html" class="elit">{{item.foodTitle}}</a>
        <p>{{item.foodDesc}}</p>
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
