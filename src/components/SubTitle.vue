<template>
  <div class="header head">
    <div class="container navi" id="title_bar" v-bind:style="{background: backgroundColor}">
      <div class="logo animated wow pulse" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h2 style="font-family: Helvetica;margin-top: 6px;margin-left: 15px;margin-right: 23px"><a href="index.html"><img src="/static/images/oo.png" alt="">大厨笔记</a></h2>
      </div>

      <div class="col-md-3 search" id='search' v-bind:style="{background: searchBackground, border: borderStyle}">
        <form>
          <input v-model="searchText" type="text" placeholder="搜索笔记/食材" @keyup.enter="search" required="" >
          <input type="submit" @click="search" value="" >
        </form>
      </div>

      <div id="menu_div">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="allBlog">笔记广场</router-link></li>
        <li v-if="isLogin">
          <router-link to="createNote">写笔记</router-link>
        </li>
      </div>

      <div id="login_part">
        <ul v-if="isLogin">
          <li><a @click="show_div"><img id="personal_icon" v-bind:src="subPicUrl"></a></li>
          <li @click="logout"><a>登出</a></li>
        </ul>

        <ul v-else>
          <li><router-link to="login">登录</router-link></li>
          <li><router-link to="register">注册</router-link></li>
        </ul>
      </div>
      <div v-if="isLogin" id="drop_down_div" v-show="visible" ref="main">
        <li><router-link to="focus">我的关注</router-link></li>
        <li><router-link to="collect">我的收藏</router-link></li>
        <li><router-link to="myBlogs">我的笔记</router-link></li>
        <li><router-link to="personalInfo">我的账户</router-link></li>
      </div>

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
    'from'
  ],
  data () {
    return {
      backgroundColor: 'transparent',
      searchBackground: 'none',
      borderStyle: '0.1em white solid',
      subPicUrl: '',
      visible: false,
      searchText: ''
    }
  },
  created () {
    if (this.token !== '') {
      this.getSubHeadIcon()
    }
  },
  methods: {
    show_div () {
      if (this.visible === false) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
    getSubHeadIcon () {
      let list = {token: this.token}
      let _this = this
      api.getUserInfoByToken(list).then(res => {}).catch(res => {
        let user = res.data
        _this.subPicUrl = user.icon
      })
    },
    logout: function () {
      this.token = ''
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop < 45) {
        this.backgroundColor = 'transparent'
        this.searchBackground = 'none'
        this.borderStyle = '0.1em white solid'
      } else {
        this.backgroundColor = 'rgb(14, 92, 67)'
        this.searchBackground = '#005238'
        this.borderStyle = 'none'
      }
    },
    search () {
      if (this.from === 'allblog') {
        console.log('跳转')
        this.$emit('search', this.searchText)
      } else {
        this.$router.push({
          name: 'AllBlog',
          params: {
            currentChooseLabel: '搜索结果',
            query: this.searchText
          }
        })
      }
    }
  },
  computed: {
    isLogin: function () {
      return (this.token !== '')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
  @import "../css/naviBar.css";
</style>
