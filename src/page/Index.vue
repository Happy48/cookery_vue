<template>
  <div>
    <div class="header">
      <Title></Title>
      <!-- start search-->
      <div class="banner">
        <h2 class="animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms" style="font: bold;color: white">雨后 清新 空气</h2>
        <label></label>
        <h4 class="animated wow fadeInTop" data-wow-duration="1000ms" data-wow-delay="500ms" style="color: white;">与美食相遇在雨后炎热的六月</h4>
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
              <h3>六月推荐</h3>
              <label><i class="glyphicon glyphicon-menu-up"></i></label>
              <span>很多选择很多选择</span>
            </div>
            <div class="col-md-8 content-right animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
              <p>六月有点六月有点热我们适合做什么菜吃我们适合做什么菜吃我们适合做什么菜吃我们适合做什么菜吃我们适合做什么菜吃我们适合做什么菜吃</p>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="content-mid">

            <IndexBlog :title="indexblogData[0].title" :url="indexblogData[0].url" :description="indexblogData[0].description">
            </IndexBlog>
            <IndexBlog :title="indexblogData[0].title" :url="indexblogData[1].url" :description="indexblogData[0].description">
            </IndexBlog>
            <IndexBlog :title="indexblogData[0].title" :url="indexblogData[2].url" :description="indexblogData[0].description">
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
            <h3>六月热门</h3>
            <label><i class="glyphicon glyphicon-menu-up"></i></label>
            <span>很多热门很多热门</span>
          </div>
          <div class="col-md-8 content-right animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
            <p>这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系这是六月的热门菜系</p>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="news-bottom">
          <div class="news-bot">
            <IndexHot :date="indexHotData[0].date" :comments="indexHotData[0].comments" :description="indexHotData[0].description" :url="indexHotData[0].url"></IndexHot>
            <IndexHot :date="indexHotData[1].date" :comments="indexHotData[1].comments" :description="indexHotData[1].description" :url="indexHotData[1].url"></IndexHot>
            <div class="clearfix"> </div>
          </div>
          <div class="news-bot">
            <IndexHot :date="indexHotData[2].date" :comments="indexHotData[2].comments" :description="indexHotData[2].description" :url="indexHotData[2].url"></IndexHot>
            <IndexHot :date="indexHotData[3].date" :comments="indexHotData[3].comments" :description="indexHotData[3].description" :url="indexHotData[3].url"></IndexHot>
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

export default {
  stores: {
    currentUid: 'state.token'
  },
  data () {
    return {
      indexblogData: [
        {
          title: 'FOOD(带博客链接)',
          url: '/static/images/aa.jpg',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
        },
        {
          title: 'FOOD(带博客链接)',
          url: '/static/images/aa1.jpg',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
        },
        {
          title: 'FOOD(带博客链接)',
          url: '/static/images/aa2.jpg',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
        }
      ],
      indexHotData: [
        {
          date: '08.09.2018',
          comments: 5,
          description: 'here are many variations of passages of Lorem Ipsum available',
          url: '/static/images/ne.jpg'
        },
        {
          date: '08.09.2018',
          comments: 5,
          description: 'here are many variations of passages of Lorem Ipsum available',
          url: '/static/images/ne.jpg'
        },
        {
          date: '08.09.2018',
          comments: 5,
          description: 'here are many variations of passages of Lorem Ipsum available',
          url: '/static/images/ne.jpg'
        },
        {
          date: '08.09.2018',
          comments: 5,
          description: 'here are many variations of passages of Lorem Ipsum available',
          url: '/static/images/ne.jpg'
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
  methods: {
  }
}
</script>
<style scoped>
</style>
