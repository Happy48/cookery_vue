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
        <li class="breadcrumb-item active">{{title}}</li>
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
            <h5 style="padding-top: 40px;color: #97824B;font-size: 16px"> 人做过这道菜</h5>
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
            <td>{{item.quantity}}</td>
          </tr>
          </tbody>
        </table>
        <hr>
        <h4>{{title}} 的做法</h4>
        <br>
        <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="font-size:20px;width:100%;">
          <tbody>
          <tr :key="item.id" v-for="item in steps">
            <td><h4>{{item.id}}</h4></td>
            <td style="width: 300px">{{item.desc}}</td>
            <td><img class="img-responsive" :src="item.picUrl" style="width: 180px;height: 150px"></td>
          </tr>
          </tbody>
        </table>
        <work-component :workList="works"></work-component>
      </div>
      <comment-component :commentList="comments"></comment-component>
    </div>
  </div>
</template>
<script>
import WorkComponent from '@/components/WorkComponent'
import CommentComponent from '@/components/CommentComponent'
import api from '@/api/getData'

export default {
  data () {
    return {
      title: '营养齐全的【Cobb Salad】',
      url: '/static/images/ss.jpg',
      count: 2373,
      date: '08.09.2014',
      commentNumber: 5 ,
      desc: '你知道考伯沙拉吗？满满一盘色彩缤纷的沙拉哟！看着心情就好好',

      peopleUrl: '/static/images/si1.jpg',
      name: 'Andy',
      works: [],
      comments: [],


      materialList: [
        {
          name: '沙拉生菜',
          quantity: '一颗'
        },
        {
          name: '牛油果',
          quantity: '半个'
        }
      ],
      steps: [
        {
          id: 1,
          desc: '沙拉生菜洗干净，切碎一些，放入盘底',
          picUrl: '/static/images/bl4.jpg'
        },
        {
          id: 2,
          desc: '小番茄对半切开排入盘中，水煮蛋切开成小块，洋葱切小块，放入盘中',
          picUrl: '/static/images/bl4.jpg'
        }
      ]
    }
  },
  created () {
    this.initBlogDetail()
  },
  methods: {
    initBlogDetail () {
      let information = {
        noteId: 3
      }
      api.getNoteDetail(information).then().catch(res => {
        let note = res.data
        this.title = note.foodTitle
        this.url = note.foodPic
        this.count = note.workVOList.length
        this.date = note.foodCreateTime
        this.commentNumber = note.commentVOList.length
        this.desc = note.foodDesc
        this.peopleUrl = note.userVO.icon
        this.name = note.userVO.userName
        this.materialList= note.materialVOList
        this.steps = note.stepVOList
        this.works = note.workVOList
        this.comments = note.commentVOList
      })
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
