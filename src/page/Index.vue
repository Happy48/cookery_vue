<template>
  <div>
    <div class="header">
      <Title></Title>
      <!-- start search-->
      <div class="banner">
        <h2 class="animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms" style="color: white">雨后 清新 空气</h2>
        <label></label>
        <h4 class="animated wow fadeInTop" data-wow-duration="1000ms" data-wow-delay="500ms" style="color: white;">与美食相遇在雨后炎热的{{month}}</h4>
        <div id="down">
          <a class="scroll down" href="#content-down">
            <canvas id="downCanvas" width="50" height="50">你的浏览器不支持canvas，请下载更新版本的浏览器
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
              <span>很多选择很多选择</span>
            </div>
            <div class="col-md-8 content-right animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
              <p>{{month}}有点{{month}}有点热我们适合做什么菜吃我们适合做什么菜吃我们适合做什么菜吃我们适合做什么菜吃我们适合做什么菜吃我们适合做什么菜吃</p>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="content-mid">

            <IndexBlog :title="indexblogData[0].foodTitle" :url="indexblogData[0].foodPic" :description="indexblogData[0].foodDesc">
            </IndexBlog>
            <IndexBlog :title="indexblogData[0].foodTitle" :url="indexblogData[1].foodPic" :description="indexblogData[0].foodDesc">
            </IndexBlog>
            <IndexBlog :title="indexblogData[0].foodTitle" :url="indexblogData[2].foodPic" :description="indexblogData[0].foodDesc">
            </IndexBlog>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--news-->
    <div class="content-top-top">
      <div class="container">
        <div class="content-top">
          <div class="col-md-4 content-left animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
            <h3>{{month}}热门</h3>
            <label><i class="glyphicon glyphicon-menu-up"></i></label>
            <span>很多热门很多热门</span>
          </div>
          <div class="col-md-8 content-right animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
            <p>这是{{month}}的热门菜系这是{{month}}的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系</p>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="news-bottom">
          <div class="news-bot">
            <IndexHot :date="indexHotData[0].foodCreateTime" :comments="indexHotData[0].foodCollect" :description="indexHotData[0].foodTitle" :url="indexHotData[0].foodPic"></IndexHot>
            <IndexHot :date="indexHotData[1].foodCreateTime" :comments="indexHotData[1].foodCollect" :description="indexHotData[1].foodTitle" :url="indexHotData[1].foodPic"></IndexHot>
            <div class="clearfix"> </div>
          </div>
          <div class="news-bot">
            <IndexHot :date="indexHotData[2].foodCreateTime" :comments="indexHotData[2].foodCollect" :description="indexHotData[2].foodTitle" :url="indexHotData[2].foodPic"></IndexHot>
            <IndexHot :date="indexHotData[3].foodCreateTime" :comments="indexHotData[3].foodCollect" :description="indexHotData[3].foodTitle" :url="indexHotData[3].foodPic"></IndexHot>
            <div class="clearfix"> </div>
          </div>

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
import IndexBlog from '@/components/IndexBlog'
import IndexHot from '@/components/IndexHot'
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
          foodTitle: 'FOOD(带博客链接)',
          foodPic: '/static/images/aa.jpg',
          foodDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
        },
        {
          foodTitle: 'FOOD(带博客链接)',
          foodPic: '/static/images/aa1.jpg',
          foodDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
        },
        {
          foodTitle: 'FOOD(带博客链接)',
          foodPic: '/static/images/aa2.jpg',
          foodDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
        }
      ],
      indexHotData: [
        {
          foodCreateTime: '08.09.2018',
          foodCollect: 5,
          foodTitle: 'here are many variations of passages of Lorem Ipsum available',
          foodPic: '/static/images/ne.jpg'
        },
        {
          foodCreateTime: '08.09.2018',
          foodCollect: 5,
          foodTitle: 'here are many variations of passages of Lorem Ipsum available',
          foodPic: '/static/images/ne.jpg'
        },
        {
          foodCreateTime: '08.09.2018',
          foodCollect: 5,
          foodTitle: 'here are many variations of passages of Lorem Ipsum available',
          foodPic: '/static/images/ne.jpg'
        },
        {
          foodCreateTime: '08.09.2018',
          foodCollect: 5,
          foodTitle: 'here are many variations of passages of Lorem Ipsum available',
          foodPic: '/static/images/ne.jpg'
        }
      ]
    }
  },
  components: {
    Title,
    Footer,
    IndexBlog,
    IndexHot
  },
  created () {
    this.getIndexRecommend()
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
    }
  }
}
</script>
<style scoped>
</style>
