<template>
  <div class="header head">
    <div class="container navi" id="title_bar" v-bind:style="{background: backgroundColor}">
      <div class="logo animated wow pulse" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h2 style="font-family: Helvetica;margin-top: 0px;margin-left: 15px;margin-right: 23px"><a href="index.html"><img src="/static/images/oo.png" alt="">大厨笔记</a></h2>
      </div>

      <div class="col-md-3 search" id='search' v-bind:style="{background: searchBackground, border: borderStyle}">
        <form>
          <input type="text" placeholder="搜索笔记/食材" @keyup.enter="search" required="" >
          <input type="submit" @click="search" value="" >
        </form>
      </div>

      <div id="menu_div">
        <ul v-if="isLogin">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="allBlog">笔记广场</router-link></li>
          <li><router-link to="focus">我的关注</router-link></li>
          <li><router-link to="collect">我的收藏</router-link></li>
          <li><router-link to="myBlogs">我的笔记</router-link></li>
          <li><router-link to="createNote">写笔记</router-link></li>
        </ul>
        <ul v-else>
          <li><a href="index.html">首页</a></li>
          <li><router-link to="allBlog">笔记广场</router-link></li>
        </ul>
      </div>

      <div id="login_part">
        <ul v-if="isLogin">
          <li><router-link to="personalInfo"><img id="personal_icon" src="http://img.mukewang.com/58492fe600012e8e01800180-200-200.jpg"></router-link></li>
          <li @click="logout"><a>登出</a></li>
        </ul>

        <ul v-else>
          <li @click="login"><a>登录</a></li>
          <li><router-link to="register">注册</router-link></li>
        </ul>
      </div>

    </div>
  </div>

</template>
<script>
export default {
  stores: {
    token: 'state.token'
  },
  data () {
    return {
      backgroundColor: 'transparent',
      searchBackground: 'none',
      borderStyle: '0.1em white solid'
    }
  },
  methods: {
    login: function () {
      this.token = '539aab779e71efb02749a7ed50cfdf15'
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
      console.log('search')
      this.$router.push({
        name: 'AllBlog',
        params: {
          currentChooseLabel: '搜索结果',
          query: this.searchText
        }
      })
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
