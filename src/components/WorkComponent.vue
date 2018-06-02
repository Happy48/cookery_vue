<template>
  <div>
    <hr>
    <h4>参照这个菜谱，大家做出 {{number}} 作品</h4>
    <br>
    <div class=" blog-head">
      <div :key="item.index" v-for="item in workList" class="col-md-4 blog-top">
        <div class="blog-in">
          <a href="single.html"><img class="img-responsive" :src="item.url" alt=" "></a>
          <div class="blog-grid">
            <h3><a href="single.html">{{item.name}}</a></h3>
            <div class="date">
              <span class="date-in"><i class="glyphicon glyphicon-calendar"> </i>{{item.date}}</span>
              <a href="single.html" class="comments"><i class="glyphicon glyphicon-comment"></i>24</a>
              <div class="clearfix"> </div>
            </div>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <hr>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: 2261,
      workList: [
        {
          url: '/static/images/bl3.jpg',
          name: 'ELENA',
          date: '22.08.2014',
          desc: '好吃到出乎意料'
        },
        {
          url: '/static/images/bl4.jpg',
          name: 'BOB',
          date: '22.08.2014',
          desc: '没有鸡胸肉 做了牛油果大虾沙拉'
        },
        {
          url: '/static/images/bl5.jpg',
          name: 'HARRY',
          date: '22.08.2014',
          desc: '清理了家里各种一点点的库...'
        }
      ]
    }
  }
}
</script>
<style>
</style>
