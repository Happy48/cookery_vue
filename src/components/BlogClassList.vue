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
              <a @click="showMore(subItem.noteId)"><img class="img-responsive" :src="subItem.foodPic" alt=" "></a>
              <div class="blog-grid">
                <h3><a @click="showMore(subItem.noteId)">{{subItem.foodTitle}}</a></h3>
                <div class="date">
                  <span class="date-in"><i class="glyphicon glyphicon-calendar"> </i>{{subItem.foodCreateTime}}</span>
                  <a @click="showMore(subItem.noteId)" class="comments"><i class="glyphicon glyphicon-comment"></i>{{subItem.foodLikes}}</a>
                  <div class="clearfix"> </div>
                </div>
                <p>{{subItem.foodDesc}}</p>
                <div class="more">
                  <a class="link link-yaku" @click="showMore(subItem.noteId)">
                    <span>R</span><span>e</span><span>a</span><span>d</span> <span>M</span><span>o</span><span>r</span><span>e</span>
                  </a>
                </div>
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
    showMore (noteID) {
      this.$router.push({
        name: 'blogDetail',
        params: {
          noteID: noteID
        }
      })
    }
  }
}
</script>
<style>

</style>
