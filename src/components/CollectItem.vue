<template>
  <div class="events-bottom" style="box-shadow:2px 4px 10px #aaaaaa;">
    <div v-if="direction==='left'" class="col-md-4 events-bottom1 animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
      <a @click="showMore"><img :src="foodPic" alt="" class="col_img"></a>
    </div>
    <div class="col-md-8 events-bottom2 animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms" style="padding-left: 50px;padding-right: 30px">
      <h3 @click="showMore" class="line-limit-length">{{foodTitle}}</h3>
      <label><i class="glyphicon glyphicon-menu-up"></i></label>
      <div class="date">
        <span class="date-in"><i class="glyphicon glyphicon-calendar"> </i>{{foodCreateTime}}</span>
        <a @click="showMore" class="comments"><i class="glyphicon glyphicon-star"></i>{{foodCollect}}</a>
        <a @click="showMore" class="likes"><i class="glyphicon glyphicon-heart"></i>{{foodLikes}}</a>
        <div class="clearfix"> </div>
      </div>
      <p class="bloglist-limit-length">{{foodDesc}}</p>
    </div>
    <div v-if="direction==='right'" class="col-md-6 events-bottom1 animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
      <a @click="showMore"><img :src="foodPic" alt="" class="img-responsive"></a>
    </div>
    <div class="clearfix"> </div>
  </div>
</template>
<script>
export default {
  props: [
    'foodPic',
    'foodTitle',
    'foodDesc',
    'direction',
    'foodLikes',
    'foodCreateTime',
    'foodCollect',
    'noteId',
    'name',
    'where'
  ],
  methods: {
    showMore () {
      this.$router.push({
        name: 'blogDetail',
        params: {
          noteID: this.noteId,
          name: this.name,
          where: this.where
        }
      })
    }
  }
}
</script>
<style>

</style>
