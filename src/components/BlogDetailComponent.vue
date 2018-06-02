<template>
  <div class="col-md-8" style="padding-right: 50px">
    <nav class=" wow fadeInUp animated"  data-wow-delay=".5s" >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="index.html">首页</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">沙拉</a>
        </li>
        <li class="breadcrumb-item active">
          营养齐全的【Cobb Salad】
        </li>
      </ol>
    </nav>
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-12" style="padding-top:15px ">{{title}}</h4>
      </div>
      <div class="clearfix"> </div>
    </div>
    <hr>
    <div class="single">
      <div class="single-top">
        <img class="img-responsive wow fadeInUp animated" data-wow-delay=".5s" :src="url" alt="" />

        <div class="row">
          <div class="col-md-1 wow fadeInLeft animated" data-wow-delay=".5s">
            <h4 style="font-size: 30px">{{count}}</h4>
          </div>
          <div class="col-md-9 wow fadeInLeft animated" data-wow-delay=".5s">
            <h5 style="padding-top: 40px;color: #97824B;font-size: 16px">人做过这道菜</h5>
          </div>
          <div class="col-md-2">
            <div class="leave form-group form-inline">
              <form>
                <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
                  <label class="hvr-rectangle-out">
                    <input type="submit" value="收藏">
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-6">
            <div class="lone-line">
              <h4>关于作者</h4>
              <ul class="grid-blog">
                <li><span><i class="glyphicon glyphicon-time"> </i>{{date}}</span></li>
                <li><a href="#"><i class="glyphicon glyphicon-comment"> </i>{{commentNumber}} 评论</a></li>
                <li><a href="#"><i class="glyphicon glyphicon-share"> </i>分享</a></li>
              </ul>
              <p class="wow fadeInLeft animated" data-wow-delay=".5s">{{desc}}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="comment">
              <div class="media wow fadeInLeft animated" data-wow-delay=".5s">
                <div class="media-left">
                  <a href="#">
                    <img :src="peopleUrl" alt="">
                  </a>
                </div>
                <div class="media-body" style="padding-top: 35px">
                  <h4>{{name}}</h4>
                  <li><i class="glyphicon glyphicon-share"> </i>关注</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <h4>用料</h4>
        <br>
        <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="alignment: center;font-size:20px;width:70%;border-bottom: 1px gray;">
          <tbody>
          <tr :key="item.index " v-for="item in materialList">
            <td>{{item.name}}</td>
            <td>{{item.number}}</td>
          </tr>
          </tbody>
        </table>
        <hr>
        <h4>{{title}} 的做法</h4>
        <br>
        <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="font-size:20px;width:85%;">
          <tbody>
          <tr :key="item.index" v-for="item in steps">
            <td><h4>{{item.index}}</h4></td>
            <td style="width: 450px">{{item.content}}</td>
            <td><img class="img-responsive" :src="item.url" style="width: 180px;height: 150px"></td>
          </tr>
          </tbody>
        </table>
        <work-component></work-component>
      </div>
      <comment-component></comment-component>
    </div>
  </div>
</template>
<script>
import WorkComponent from '@/components/WorkComponent'
import CommentComponent from '@/components/CommentComponent'
export default {
  data () {
    return {
      title: '营养齐全的【Cobb Salad】',
      url: '/static/images/ss.jpg',
      count: 2373,
      date: '08.09.2014',
      commentNumber: 5,
      desc: '你知道考伯沙拉吗？<span>满满一盘色彩缤纷的沙拉哟！看着心情就好好</span>',
      peopleUrl: '/static/images/si1.jpg',
      name: 'Andy',
      materialList: [
        {
          name: '沙拉生菜',
          number: '一颗'
        },
        {
          name: '牛油果',
          number: '半个'
        },
        {
          name: '鸡胸肉',
          number: '半块'
        },
        {
          name: '切达芝士片',
          number: '一片'
        },
        {
          name: '鸡蛋',
          number: '一个'
        }
      ],
      steps: [
        {
          content: '沙拉生菜洗干净，切碎一些，放入盘底',
          url: '/static/images/bl4.jpg'
        },
        {
          content: '小番茄对半切开排入盘中，水煮蛋切开成小块，洋葱切小块，放入盘中',
          url: '/static/images/bl4.jpg'
        },
        {
          content: '火腿片或培根切成1.5厘米见放的片，锅里放少量油煎出香味',
          url: '/static/images/bl4.jpg'
        },
        {
          content: '鸡胸肉切成1.5厘米见放的小块，加入适量黑胡椒腌制10分钟，锅中放少量油，煎熟',
          url: '/static/images/bl4.jpg'
        },
        {
          content: '鸡胸肉和火腿放入盘中',
          url: '/static/images/bl4.jpg'
        },
        {
          content: '芝士切碎成细条，摆入盘中',
          url: '/static/images/bl4.jpg'
        },
        {
          content: '牛油果切成1.5厘米见放的块，撒上些许柠檬汁防止氧化，摆入盘中，如图',
          url: '/static/images/bl4.jpg'
        },
        {
          content: '拌好沙拉酱就可以吃咯！',
          url: '/static/images/bl4.jpg'
        }
      ]
    }
  },
  components: {
    WorkComponent,
    CommentComponent
  }
}
</script>
<style>
</style>
