<template>
  <div>
      <div class="events-top">
        <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
          <h4 class="col-md-8" style="padding-top:15px "> {{name}} </h4>
        </div>
        <div class="clearfix"> </div>
      </div>
      <div class="blog-header">
        <div class=" blog-head">
          <div :key="subItem.index" v-for="subItem in list" class="col-md-4 blog-top" style="margin-bottom: 50px">
            <div class="blog-in">
              <a @click="showMore(subItem.noteId, subItem.foodTitle, subItem.foodDesc,subItem.foodPic)"><div class="myimg" :style="{backgroundImage:'url(' + subItem.foodPic + ')'}" alt=" "></div></a>
              <div class="blog-grid">
                <h3 class="line-limit-length"><a  @click="showMore(subItem.noteId, subItem.foodTitle, subItem.foodDesc,subItem.foodPic)">{{subItem.foodTitle}}</a></h3>
                <div class="date">
                  <span class="date-in"><i class="glyphicon glyphicon-calendar"> </i>{{subItem.foodCreateTime}}</span>
                  <a @click="showMore(subItem.noteId, subItem.foodTitle, subItem.foodDesc,subItem.foodPic)" class="comments"><i class="glyphicon glyphicon-star"></i>{{subItem.foodCollect}}</a>
                  <a @click="showMore(subItem.noteId, subItem.foodTitle, subItem.foodDesc,subItem.foodPic)" class="likes"><i class="glyphicon glyphicon-heart"></i>{{subItem.foodLikes}}</a>
                  <div class="clearfix"> </div>
                </div>
                <p class="mutiline-limit-length">{{subItem.foodDesc}}</p>
              </div>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    <div class="clearfix"> </div>
  </div>
</template>
<script>
export default {
  props: [
    'name',
    'list'
  ],
  data () {
    return {
    }
  },
  methods: {
    showMore (noteID, foodTitle, foodDesc, foodPic) {
      this.$router.push({
        name: 'blogDetail',
        params: {
          noteID: noteID,
          name: '我',
          where: 'All',
          foodTitle: foodTitle,
          foodDesc: foodDesc,
          foodPic: foodPic
        }
      })
    }
  }
}
</script>
<style>

</style>
