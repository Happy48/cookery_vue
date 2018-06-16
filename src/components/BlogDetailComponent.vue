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
          <div class="col-md-5 wow fadeInLeft animated" data-wow-delay=".5s">
            <h5 style="padding-top: 40px;color: #97824B;font-size: 16px"> 人做过这道菜</h5>
          </div>
          <div class="col-md-6" id="likeCollectDiv">
              <form>
                <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
                  <label class="hvr-rectangle-out">
                    <input @click="addLike" type="submit" v-bind:value="likeText" v-bind:style="{background: likeColor}">
                  </label>
                  &nbsp;&nbsp;&nbsp;
                  <label class="hvr-rectangle-out">
                    <input @click="addCollect" type="submit" v-bind:value="collectText" v-bind:style="{background: collectColor}">
                  </label>
                </div>
              </form>
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
  stores: {
    token: 'state.token'
  },
  data () {
    return {
      noteId: 5,
      title: '营养齐全的【Cobb Salad】',
      url: '/static/images/ss.jpg',
      count: 2373,
      date: '08.09.2014',
      commentNumber: 5,
      desc: '你知道考伯沙拉吗？满满一盘色彩缤纷的沙拉哟！看着心情就好好',
      likeColor: '#08523a',
      collectColor: '#08523a',
      likeText: '已喜欢',
      collectText: '已收藏',
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
    this.initialLikeAndCollect()
  },
  methods: {
    initBlogDetail () {
      this.noteId = this.$route.params.noteID
      let information = {
        noteId: this.noteId
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
        this.materialList = note.materialVOList
        this.steps = note.stepVOList
        this.works = note.workVOList
        this.comments = note.commentVOList
      })
    },
    initialLikeAndCollect () {
      this.noteId = this.$route.params.noteID
      let likeCollectInformation = {
        token: this.token,
        noteid: this.noteId
      }
      api.isLike(likeCollectInformation).then().catch(res => {
        let isLikeCode = res.data.code
        if (isLikeCode === '0') {
          this.likeText = '已喜欢'
          this.likeColor = 'grey'
        } else if (isLikeCode === '1') {
          this.likeText = '喜欢'
          this.likeColor = '#08523a'
        } else if (isLikeCode === '2') {
          alert('不存在该用户')
        }
      })
      api.isCollect(likeCollectInformation).then().catch(res => {
        let isCollectCode = res.data.code
        if (isCollectCode === '0') {
          this.collectText = '已收藏'
          this.collectColor = 'grey'
        } else if (isCollectCode === '1') {
          this.collectText = '收藏'
          this.collectColor = '#08523a'
        } else if (isCollectCode === '2') {
          alert('不存在该用户')
        }
      })
    },
    addLike: function () {
      this.noteId = this.$route.params.noteID
      let likeInformation = {
        token: this.token,
        noteid: this.noteId
      }
      api.like(likeInformation).then().catch(res => {
        let code = res.data.code
        if (code === '0') {
          this.likeColor = 'grey'
          this.likeText = '已喜欢'
        } else if (code === '1') {
          this.likeColor = '#08523a'
          this.likeText = '喜欢'
        } else {
          alert('不存在该用户')
        }
      })
    },
    addCollect: function () {
      this.noteId = this.$route.params.noteID
      let collectInformation = {
        token: this.token,
        noteid: this.noteId
      }
      api.collect(collectInformation).then().catch(res => {
        let code = res.data.code
        if (code === '0') {
          this.collectColor = 'grey'
          this.collectText = '已收藏'
        } else if (code === '1') {
          this.collectColor = '#08523a'
          this.collectText = '收藏'
        } else {
          alert('不存在该用户')
        }
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
  #likeCollectDiv{
    float:right
  }
</style>
