<template>
  <div class="col-md-9" style="padding-right: 80px;padding-left:50px">
    <vue-loading v-if="isLoading" type="bubbles" color="#0d6167" :size="{width: '200px', height: '200px'}"></vue-loading>
    <nav v-if='isLoading==false' class=" wow fadeInUp animated"  data-wow-delay=".5s" >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="index.html">首页</a>
        </li>
        <li class="breadcrumb-item">
          <a @click="getBlogList(tag)">{{tag}}</a>
        </li>
        <li class="breadcrumb-item active">{{foodTitle}}</li>
      </ol>
    </nav>
    <div v-if='isLoading==false' class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-12" style="padding-top:15px; margin-bottom:8px; padding-left:0;">{{foodTitle}}</h4>
        <ul class="grid-blog" style="display: inline; padding-top:15px;">
          <li><span><i class="glyphicon glyphicon-time"> </i>{{date}}</span></li>
          <li><a href="#"><i class="glyphicon glyphicon-comment"> </i>{{commentNumber}} 评论</a></li>
          <li><a href="#"><i class="glyphicon glyphicon-star"> </i>{{likeNumber}} 喜欢</a></li>
          <li><a href="#"><i class="glyphicon glyphicon-heart"> </i>{{collectNum}} 收藏</a></li>
          <li v-if="isMe" @click="editBlog"><a ><i class="glyphicon glyphicon-edit"> </i>编辑</a></li>
          <li><a href="#"><i class="glyphicon glyphicon-share"> </i>分享</a></li>
          <li><share :config="config"></share></li>
        </ul>
      </div>
      <div class="clearfix"> </div>
    </div>
    <hr v-if='isLoading==false'>
    <div v-if='isLoading==false' class="single">
      <div class="single-top">
        <div style="width:100%; max-height:450px; overflow: hidden">
          <div class="img-responsive wow fadeInUp animated blog-pic" data-wow-delay=".5s" :style="{backgroundImage:'url(' + url + ')'}" alt=""></div>
        </div>
        <div class="row">
          <div class="col-md-5 wow fadeInLeft animated" data-wow-delay=".5s" style="padding-top:10px;">
            <br />
            <span><h4 style="font-size: 30px;display: inline;">{{count}}</h4>&nbsp;<h5 style="color: #97824B;font-size: 16px; display: inline;">人做过这道菜</h5></span>
          </div>
          <div v-if="isOther" class="col-md-6" id="likeCollectDiv">
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
          <div class="col-md-7">
            <div class="lone-line">
              <!--<h4>作者的话</h4>-->
              <br/>
              <p class="wow fadeInLeft animated" data-wow-delay=".5s">{{foodDesc}}&nbsp;<img src="/static/images/qu4.png"/></p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="comment">
              <div class="media wow fadeInLeft animated" data-wow-delay=".5s">
                <div style="padding-top:0; text-align:center;">
                  <a href="#">
                    <img :src="peopleUrl" alt="" style="width:120px; height:120px;border-radius:60%;">
                  </a>
                </div>
                <div  style="text-align:center;">
                  <h4>{{name}}</h4>
                  <div v-if="isOther" class="single-grid wow fadeInLeft animated" data-wow-delay=".5s" style="margin-top: -10px">
                    <label class="hvr-rectangle-out">
                      <input @click="addFocus" type="submit" v-bind:value="focusText" v-bind:style="{background: focusColor}">
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <h4>{{foodTitle}}的相关分类</h4><br>
        <p style="font-size:20px;">{{tagList}}</p>
        <hr>
        <h4>用料</h4>
        <br>
        <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="alignment: center;font-size:20px;width:100%;border-bottom: 1px gray;">
          <tbody>
          <tr :key="item.index " v-for="item in materialList">
            <td style="width:40%;">{{item.name}}</td>
            <td style="width:60%;">{{item.quantity}}</td>
          </tr>
          </tbody>
        </table>
        <hr>
        <h4>做法</h4>
        <br>
        <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="font-size:20px;width:100%;">
          <tbody>
          <tr :key="item.id" v-for="item in steps">
            <td><h4 style="padding-top:0">{{item.id}}</h4></td>
            <td style="width: 350px;">{{item.desc}}</td>
            &nbsp;&nbsp;&nbsp;<td><img class="img-responsive" :src="item.picUrl" style="width: 180px;height: 150px"></td>
          </tr>
          </tbody>
        </table>
        <hr>
        <work-component :workList="works" :noteName="this.foodTitle" :noteId="this.noteId"></work-component>
      </div>
      <hr>
      <comment-component :commentList="comments" :noteId=this.noteId></comment-component>
    </div>
  </div>
</template>
<script>
import WorkComponent from '@/components/WorkComponent'
import CommentComponent from '@/components/CommentComponent'
import api from '@/api/getData'
import { VueLoading } from 'vue-loading-template'

export default {
  stores: {
    token: 'state.token',
    ip: 'state.ip'
  },
  data () {
    return {
      tag: '沙拉',
      tagList: '',
      noteId: 5,
      foodTitle: '',
      url: '',
      count: 2373,
      date: '',
      commentNumber: 5,
      likeNumber: 0,
      collectNum: 0,
      foodDesc: '',
      likeColor: '#08523a',
      isLoading: true,
      collectColor: '#08523a',
      focusColor: '#08523a',
      likeText: '',
      collectText: '',
      peopleUrl: '',
      name: '',
      username: '',
      focusText: '关注',
      works: [],
      comments: [],
      materialList: [],
      steps: [],
      config: {
        url: 'http://' + this.ip + ':8080/#/blogDetail/' + (this.$route.params.noteID), // localhost需要改成具体ip地址才能成功分享。网址,默认使用 window.location.href
        source: 'http://' + this.ip + ':8080/', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: this.$route.params.foodTitle, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        description: this.$route.params.foodDesc, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image: this.$route.params.foodPic, // 图片, 默认取网页中第一个img标签
        disabled: ['google', 'facebook', 'twitter', 'linkedin', 'diandian', 'douban', 'tencent', 'q'], // 禁用的站点
        wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
        wechatQrcodeHelper: '<div>微信里点“发现”，扫一扫。</div>'
      }
    }
  },
  created () {
    this.initTag()
    this.initBlogDetail()
    this.initUserInfo()
  },
  methods: {
    getBlogList (name) {
      this.$router.push({
        name: 'AllBlog',
        params: {
          currentChooseLabel: name,
          tagName: name,
          name: '我',
          where: 'All'
        }
      })
    },
    initTag () {
      this.noteId = this.$route.params.noteID
      let information = {
        noteId: this.noteId
      }
      api.getTagByNoteId(information).then().catch(res => {
        let taglist = res.data
        this.tag = taglist[0].name
        var tagtmpList = []
        for (let i = 0; i < taglist.length; i++) {
          tagtmpList.push(taglist[i].name)
        }
        this.tagList = tagtmpList.join('，')
      })
    },
    initBlogDetail () {
      this.noteId = this.$route.params.noteID
      let information = {
        noteId: this.noteId
      }
      let self = this
      api.getNoteDetail(information).then().catch(res => {
        let note = res.data
        this.foodTitle = note.foodTitle
        this.url = note.foodPic
        this.count = note.workVOList.length
        this.date = note.foodCreateTime
        this.commentNumber = note.commentVOList.length
        this.likeNumber = note.foodLikes
        this.collectNum = note.foodCollect
        this.foodDesc = note.foodDesc
        this.peopleUrl = note.userVO.icon
        this.name = note.userVO.userName
        this.materialList = note.materialVOList
        this.steps = note.stepVOList
        this.works = note.workVOList
        this.comments = note.commentVOList

        this.config['title'] = this.foodTitle
        this.config['description'] = this.foodDesc

        console.log(this.config)
        this.isLoading = false
        self.initialLikeAndCollect()
        self.initialFocus()
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
    initUserInfo () {
      api.getUserInfoByToken({token: this.token}).then().catch(res => {
        let userinfo = res.data
        this.username = userinfo['userName']
      })
    },
    initialFocus () {
      let info = {
        token: this.token,
        name: this.name
      }
      api.isFocus(info).then().catch(res => {
        let isFocusCode = res.data.code
        if (isFocusCode === '0') {
          this.focusText = '已关注'
          this.focusColor = 'grey'
        } else if (isFocusCode === '1') {
          this.focusText = '关注'
          this.focusColor = '#08523a'
        } else if (isFocusCode === '2') {
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
    },
    addFocus () {
      this.likeText = '已关注'
      this.likeColor = 'grey'
    },
    editBlog () {
      this.$router.push({
        name: 'EditNote',
        params: {
          noteID: this.noteId
        }
      })
    }
  },
  components: {
    WorkComponent,
    CommentComponent,
    VueLoading
  },
  computed: {
    isMe: function () {
      return this.name === this.username
    },
    isOther: function () {
      return this.name !== this.username
    }
  }
}
</script>
<style>
  #likeCollectDiv{
    float:right
  }
</style>
