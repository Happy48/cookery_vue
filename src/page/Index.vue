<template>
  <div>
    <div class="header">
      <Title></Title>
      <!-- start search-->
      <div class="banner">
        <h2 class="animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms" style="color: white">雨后 清新 空气</h2>
        <label></label>
        <h4 class="animated wow fadeInTop" data-wow-duration="1000ms" data-wow-delay="500ms" style="color: white;">与美食相遇在雨后炎热的{{month}}</h4>
        <div id="down" >
          <a class="scroll down" href="#content-down">
            <canvas id="downCanvas" width="50" height="50" ref="down">你的浏览器不支持canvas，请下载更新版本的浏览器
            </canvas>
          </a>
        </div>
      </div>
    </div>

    <!--content-->
    <div class="content" id="content-down">
      <div class="content-top-top">
        <div class="container">
          <div class="content-top">
            <div class="col-md-4 content-left animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
              <h3>{{month}}推荐</h3>
              <label><i class="glyphicon glyphicon-menu-up"></i></label>
              <span>清补 芒种 夏至</span>
            </div>
            <div class="col-md-8 content-right animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
              <p>六月是夏季真正的开始，从二十四节气来说，包含有“芒种”和“夏至”两个节气。调养应以饮食清补为原则。宜食蔬菜、豆类、水果等。如菠萝、苦瓜、西瓜、荔枝、芒果、绿豆、赤豆等。忌食辛辣油腻之品。如羊肉、牛肉、猪肉、辣椒、葱、姜等 。
              </p>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="row">
            <RecommendSwiper :indexblogData="indexblogData" :name="name"></RecommendSwiper>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--news-->
    <div class="content-top-top" style="margin-top: -80px;margin-bottom: -50px">
      <div class="container">
        <div class="content-top">
          <div class="col-md-4 content-left animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
            <h3>{{month}}热门</h3>
            <label><i class="glyphicon glyphicon-menu-up"></i></label>
            <span>火热 苦夏 开胃</span>
          </div>
          <div class="col-md-8 content-right animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
            <p>闰六月正值三伏天，很多人就会受到“苦夏”的困扰，口淡乏味，食欲不振。因此，“开胃”是夏季养生的重点。对于肝火旺盛的人来说，闰六月需要多选用可以护肝养肝的食物及水果，吃草莓、喝枸杞水、喝酸奶等奶制品，是比较好的几个选择。</p>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="news-bottom">
          <HotSwiper :indexHotData="indexHotData" :name="name"></HotSwiper>
        </div>
      </div>
    </div>
    <!--//news-->

    <Footer></Footer>
</div>
</template>
<script>
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import RecommendSwiper from '@/components/RecommendSwiper'
import HotSwiper from '@/components/HotSwiper'
import api from '@/api/getData'

export default {
  stores: {
    currentUid: 'state.token'
  },
  data () {
    return {
      month: '六月',
      indexblogData: [
        {
          foodPic: '/static/images/ev.jpg',
          foodTitle: '土司的9种经典吃法',
          foodDesc: '土司的吃法应该可以做到365天不变样，我给恩泽同学经常做的大概就是这9种经典吃法。Yummy Yummy Yummy！',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 1,
          foodLikes: 0
        }
      ],
      indexHotData: [
        {
          foodPic: '/static/images/ev.jpg',
          foodTitle: '土司的9种经典吃法',
          foodDesc: '土司的吃法应该可以做到365天不变样，我给恩泽同学经常做的大概就是这9种经典吃法。Yummy Yummy Yummy！',
          foodCollect: 0,
          foodCreateTime: '2018-06-01',
          noteId: 1,
          foodLikes: 0
        }
      ],
      name: '我'
    }
  },
  components: {
    Title,
    Footer,
    HotSwiper,
    RecommendSwiper
  },
  created () {
    this.getIndexRecommend()
  },
  mounted: function () {
    this.$nextTick(function () {
      this.drawDown()
    })
  },
  methods: {
    getIndexRecommend () {
      api.getIndexRecommend().then(res => {
        let data = res.data
        this.month = data.month
        this.indexblogData = data.recommend
        this.indexHotData = data.hot
      }).catch(res => {
        console.log('错误')
        let data = res.data
        this.month = data.month
        this.indexblogData = data.recommend
        this.indexHotData = data.hot
      })
    },
    drawDown () {
      let c = this.$refs.down
      let cxt = c.getContext('2d')
      cxt.beginPath()
      cxt.moveTo(5, 20)
      cxt.lineTo(25, 45)
      cxt.lineTo(45, 20)
      cxt.lineWidth = 5
      cxt.strokeStyle = 'white'
      cxt.lineCap = 'round'
      cxt.lineJoin = 'round'
      cxt.stroke()
      cxt.moveTo(5, 5)
      cxt.lineTo(25, 30)
      cxt.lineTo(45, 5)
      cxt.lineWidth = 5
      cxt.strokeStyle = 'white'
      cxt.lineCap = 'round'
      cxt.lineJoin = 'round'
      cxt.stroke()
    }
  }
}
</script>
<style scoped>
</style>
