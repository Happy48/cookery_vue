<template>
  <div class="events-bottom">
    <div v-if="direction==='left'" class="col-md-6 events-bottom1 animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
      <a href="single.html"><img :src="url" alt="" class="img-responsive"></a>
    </div>
    <div class="col-md-6 events-bottom2 animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
      <h3>{{title}}</h3>
      <label><i class="glyphicon glyphicon-menu-up"></i></label>
      <p>{{description}}</p>
      <div class="read-more">
        <a class="link link-yaku" href="single.html">
          <span>笔</span><span>记</span><span>详</span><span>情</span>
        </a>
      </div>
    </div>
    <div v-if="direction==='right'" class="col-md-6 events-bottom1 animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
      <a href="single.html"><img :src="url" alt="" class="img-responsive"></a>
    </div>
    <div class="clearfix"> </div>
  </div>
</template>
<script>
export default {
  props: [
    'url',
    'title',
    'description',
    'direction'
  ]
}
</script>
<style>

</style>
