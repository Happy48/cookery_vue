<template>
  <div>
    <div class="comment" v-show="commentList.length > 0">
      <h4>评论</h4>
      <div :key="item.index" v-for="item in commentList" class="media wow fadeInLeft animated" data-wow-delay=".5s">
        <div v-if="isMe(item.userName)===true" style="padding-left: 60px" >
          <p class="comment">
            <a >作者回复</a><span>{{item.time}}</span>
          </p>
          <div class="clearfix"> </div>
          <p style="padding-top: 10px">{{item.content}}</p>
        </div>
        <div v-if="isMe(item.userName)!==true" >
          <p class="comment">
            <a @click="userInfo(item.userName)"><img :src="item.icon" alt="" style="width:40px;height:40px;border-radius:50%;"></a>
            <a style="padding-left: 20px" @click="userInfo(item.userName)">{{item.userName}}</a><span>{{item.time}}</span>
            <a @click="reply(item.postid)" style="float: right"><i class="glyphicon glyphicon-comment"> </i>回复</a>
          </p>
          <div class="clearfix"> </div>
          <p style="padding-left: 60px">{{item.content}}</p>
        </div>
      </div>
    </div>
    <div class="leave">
      <br />
      <h4>说点什么吧～</h4>
      <form>
        <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
          <textarea v-model="comment">说说你的想法</textarea>
          <!--<textarea value=" " onfocus="this.value='';" onblur="if (this.value == '') {this.value = 'Comment';}">Comment</textarea>-->
          <label class="hvr-rectangle-out">
            <input @click="leaveComment" type="submit" value="发布">
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/api/getData'

export default {
  stores: {
    token: 'state.token'
  },
  props: [
    'commentList',
    'noteId'
  ],
  created () {
    this.initUserInfo()
  },
  methods: {
    reply (postid) {
      let information = {
        token: this.token,
        noteId: this.noteId,
        mainpostId: postid,
        content: this.comment
      }
      api.leaveReplyToMainPost(information).then(res => {
      }).catch(res => {
        let data = res.data
        if (data.code === '0') {
          alert('留言成功' + postid)
        } else {
          alert('出错')
        }
      })
    },
    leaveComment () {
      let information = {
        token: this.token,
        noteId: this.noteId,
        content: this.comment
      }
      api.leaveReply(information).then(res => {
      }).catch(res => {
        let data = res.data
        if (data.code === '0') {
          alert('留言成功')
        } else {
          alert('出错')
        }
      })
    },
    userInfo (userName) {
      this.$router.push({
        name: 'PersonalInfo',
        params: {
          userName: userName,
          name: '我',
          where: 'All'
        }
      })
    },
    isMe (name) {
      return name === this.userName
    },
    initUserInfo () {
      api.getUserInfoByToken({token: this.token}).then().catch(res => {
        let userinfo = res.data
        this.userName = userinfo['userName']
      })
    }
  },
  data () {
    return {
      comment: '',
      userName: ''
    }
  }
}
</script>
<style>
  h4{
    color:rgb(14, 92, 67);
    font-size:23px;
  }
</style>
