<template>
  <div>
    <div class="comment">
      <h3>评论</h3>
      <div :key="item.index" v-for="item in commentList" class="media wow fadeInLeft animated" data-wow-delay=".5s">
        <div class="code-in">
          <p class="smith"><a @click="userInfo(item.userName)">{{item.userName}}</a> <span>{{item.time}}</span></p>
          <p class="reply"><a href="#"><i class="glyphicon glyphicon-repeat"> </i>REPLY</a></p>
          <div class="clearfix"> </div>
        </div>
        <div class="media-left">
          <a @click="userInfo(item.userName)">
            <img :src="item.icon" alt="">
          </a>
        </div>
        <div class="media-body">
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <div class="leave">
      <h3>说点什么吧～</h3>
      <form>
        <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
          <textarea value=" " onfocus="this.value='';" onblur="if (this.value == '') {this.value = 'Comment';}">Comment</textarea>
          <label class="hvr-rectangle-out">
            <input type="submit" value="发布">
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'commentList'
  ],
  methods: {
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
</style>
