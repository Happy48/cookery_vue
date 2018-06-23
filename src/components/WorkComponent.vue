<template>
  <div>
    <hr>
    <h4>参照这个菜谱，大家做出{{workList.length}}个作品</h4>
    <div class=" blog-head">
      <div :key="item.index" v-for="item in workList" class="col-md-4 blog-top" style="padding-top: 10px">
        <div class="blog-in">
          <a href="single.html"><img class="img-responsive" :src="item.picture" alt=" "></a>
          <div class="blog-grid">
            <h3><a @click="userInfo(item.userName)">{{item.userName}}</a></h3>
            <div class="date">
              <!--<span class="date-in"><i class="glyphicon glyphicon-calendar"> </i>22.08.2014</span>-->
              <!--<a href="single.html" class="comments"><i class="glyphicon glyphicon-comment"></i>24</a>-->
              <div class="clearfix"> </div>
            </div>
            <p class="mutiline-limit-length">{{item.desc}}</p>
          </div>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <Carousel :img="workList"></Carousel>
    <hr>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel'
export default {
  props: [
    'workList'
  ],
  methods: {
    userInfo (userName) {
      this.$router.push({
        name: 'PersonalInfo',
        params: {
          userName: userName,
          name: '我',
          where: 'All'
        }
      })
    }
  },
  data () {
    return {
      number: 2273
      // workList: [
      //   {
      //     picture: '',
      //     userName: '',
      //     desc: ''
      //   }
      // ]
    }
  },
  components: {
    Carousel
  }
}
</script>
<style>
</style>
