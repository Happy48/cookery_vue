<template>
  <div>
    <div class="comment" v-show="commentList.length > 0">
      <h4>评论</h4>
      <div :key="item.index" v-for="item in commentList" class="media wow fadeInLeft animated" data-wow-delay=".5s">
        <div class="code-in">
          <p class="smith"><a @click="userInfo(item.userName)">{{item.userName}}</a> <span>{{item.time}}</span></p>
          <p class="reply"><a @click="reply(item.postid)"><i class="glyphicon glyphicon-repeat"> </i>REPLY</a></p>
          <div class="clearfix"> </div>
        </div>
        <div class="media-left">
          <a @click="userInfo(item.userName)">
            <img :src="item.icon" alt="" style="width:80px;height:80px;border-radius:50%;">
          </a>
        </div>
        <div class="media-body">
          <p>{{item.content}}</p>
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
          alert('留言成功'+postid)
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
    }
  },
  data () {
    return {
      comment: ''
      // commentList: [
      //   {
      //     userName: 'Andey ',
      //     time: '02 June 2014, 15:20',
      //     icon: '/static/images/si2.jpg',
      //     content: '早餐开启美好的一天'
      //   },
      //   {
      //     userName: 'Rackham  ',
      //     time: '02 June 2014, 15:20',
      //     icon: '/static/images/si.jpg',
      //     content: '啊啊啊～～还有这样的存在？'
      //   },
      //   {
      //     userName: 'Andey ',
      //     time: '02 June 2014, 15:20',
      //     icon: '/static/images/si1.jpg',
      //     content: '整个食草菜谱 我也要吃'
      //   }
      // ]
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
