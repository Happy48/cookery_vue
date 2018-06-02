<template>
  <div class="col-md-6 news-bottom1 animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
    <a href="single.html">
      <div class="content-item" v-bind:style="{background:urlStyle}">
        <div class="overlay"></div>
        <div class=" news-bottom2">
          <ul class="grid-news">
            <li><span><i class="glyphicon glyphicon-calendar"></i>{{date}} </span><b>/</b></li>
            <li><span><i class="glyphicon glyphicon-comment"> </i>{{comments}} Comment</span><b>/</b></li>
            <li><span><i class="glyphicon glyphicon-share"> </i>Share</span></li>
          </ul>
          <p>{{description}}</p>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: [
    'date',
    'comments',
    'description',
    'url'
  ],
  computed: {
    urlStyle: function () {
      return 'url(' + this.url + ') no-repeat'
    }
  }
}
</script>
<style>
</style>
