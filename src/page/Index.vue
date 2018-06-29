<template>
  <div>
    <div class="header">
      <Title></Title>
      <!-- start search-->
      <div class="banner">
        <h2 class="animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms" style="color: white">雨后 蝉鸣 流火</h2>
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
              <span>清补 小暑 大暑</span>
            </div>
            <div class="col-md-8 content-right animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
              <p>七月份是夏季天气比较炎热的时候，包含有“小暑”和“大暑”两个节气。中医认为夏季也是人体阳气最旺盛的时候，所以人们在七月工作劳动之时，要注意劳逸结合。七月份的饮食应以清淡为主，蔬菜应多食绿叶菜及黄瓜、莲子、藕、豌豆等。
              </p>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="row">
            <vue-loading v-if="isLoading" type="bubbles" color="#0d6167" :size="{width: '200px', height: '200px'}"></vue-loading>
            <RecommendSwiper v-if='isLoading==false' :indexblogData="indexblogData" :name="name"></RecommendSwiper>
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
            <p>七月正值三伏天，很多人就会受到“苦夏”的困扰，口淡乏味，食欲不振。因此，“开胃”是夏季养生的重点。夏季要特别注意饮水量的增加，每天的饮水包括牛奶、豆浆、粥、汤在内，应在2000毫升左右，应经常少量地喝些水以维持机体的需要。
            </p>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="news-bottom">
          <vue-loading v-if="isLoading" type="bubbles" color="#0d6167" :size="{width: '200px', height: '200px'}"></vue-loading>
          <HotSwiper v-if='isLoading==false' :indexHotData="indexHotData" :name="name"></HotSwiper>
        </div>
      </div>
    </div>
    <!--//news-->

    <div class="content-top-top" style="margin-top: -80px;margin-bottom: -50px">
      <div class="container">
        <div class="content-top">
          <div class="col-md-4 content-left animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
            <h3>{{month}}博主</h3>
            <label><i class="glyphicon glyphicon-menu-up"></i></label>
            <span>热门 博主 关注</span>
          </div>
          <div class="col-md-8 content-right animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
            <p>夏天应尽量少吃感光蔬菜。芹菜、莴苣、油菜、菠菜、香菜、小白菜、芥菜、白萝卜等蔬菜内含有光敏性物质，吃完后立刻晒太阳，皮肤会容易出现晒斑。在炎热的夏季，适当饮用一些保健消暑饮料是必要的，但切忌过度贪凉饮冷。
            </p>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="news-bottom">
          <vue-loading v-if="isLoading" type="bubbles" color="#0d6167" :size="{width: '200px', height: '200px'}"></vue-loading>
          <FocusSwiper v-if='isLoading==false' :indexFocus="indexFocus" :name="name"></FocusSwiper>
        </div>
      </div>
    </div>
    <Footer></Footer>
</div>
</template>
<script>
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import RecommendSwiper from '@/components/RecommendSwiper'
import HotSwiper from '@/components/HotSwiper'
import FocusSwiper from '@/components/FocusSwiper'
import api from '@/api/getData'
import { VueLoading } from 'vue-loading-template'

export default {
  stores: {
    currentUid: 'state.token'
  },
  data () {
    return {
      month: '七月',
      indexblogData: [],
      indexHotData: [],
      indexFocus: [],
      name: '我',
      isLoading: true
    }
  },
  components: {
    Title,
    Footer,
    HotSwiper,
    RecommendSwiper,
    FocusSwiper,
    VueLoading
  },
  created () {
    this.getIndexRecommend()
    this.getRecommendFocus()
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
        // this.month = data.month
        this.indexblogData = data.recommend
        this.indexHotData = data.hot
      }).catch(res => {
        console.log('错误')
        console.log(res.data)
        let data = res.data
        // this.month = data.month
        this.indexblogData = data.recommend
        this.indexHotData = data.hot
        this.isLoading = false
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
    },
    getRecommendFocus () {
      api.getRecommendFocus({'token': this.currentUid}).then().catch(res => {
        console.log(res.data)
        this.indexFocus = res.data
      })
    }
  }
}
</script>
<style scoped>
</style>
