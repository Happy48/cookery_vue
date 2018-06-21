<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-8" style="padding-top:15px "> {{names}}的关注 </h4>
        <div class="search col-md-4">
          <form>
            <input @keyup.enter="search" v-model="searchText" type="text" placeholder="搜索笔记/食材" required="" >
            <input @click="search" type="submit" value="" >
          </form>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>

    <div v-if='forcusList.length===0' style="align-items: center">
      <img src="/static/images/searchBlank.png" width="500px"/>
      <p>高冷如你，多多关注喜欢的博主哟～</p>
    </div>
    <div v-if="forcusList.length!==0"  class="menu-bottom animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <focus-item :key="subItem.icon" v-for="subItem in forcusList"  :url="subItem.icon" :name="subItem.name"></focus-item>
      <div class="clearfix"> </div>
    </div>
    <!--<div :key="item.index" v-for="item in forcusList" class="menu-bottom animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">-->
      <!--<focus-item :key="subItem.icon" v-for="subItem in item"  :url="subItem.icon" :name="subItem.name"></focus-item>-->
      <!--<div class="clearfix"> </div>-->
    <!--</div>-->
    <div v-if="forcusList.length!==0" style="width:75% ;margin: 0 auto">
      <PaginationFollow :total="total" :current-page='current' @pagechange="pagechange" ref="pagi"></PaginationFollow>
    </div>
  </div>
</template>
<script>
import FocusItem from '@/components/FocusItem'
import api from '@/api/getData'
import PaginationFollow from '@/components/PaginationFollow'

export default {
  stores: {
    token: 'state.token'
  },
  props: [
    'name'
  ],
  data () {
    return {
      forcusList: [],
      page: 0,
      total: 150,
      current: 1,
      names: this.name,
      searchText: ''
    }
  },
  created () {
    if (this.name === '我') {
      this.getMyFollow()
    }
  },
  components: {
    FocusItem,
    PaginationFollow
  },
  methods: {
    getMyFollow () {
      let list = {token: this.token}
      api.getMyFollowTotal(list).then(res => {}).catch(res => { this.total = res.data })
      let listInfo = {
        token: this.token,
        page: this.page
      }
      api.getMyFollowListByPage(listInfo).then(res => {}).catch(res => {
        console.log(res.data)
        this.forcusList = res.data
      })
    },
    search () {
      let searchText = this.searchText
      this.forcusList = this.forcusList.filter(function (item) {
        return item.name.indexOf(searchText) !== -1
      })
    },
    pagechange: function (currentPage) {
      console.log(currentPage)
      var p = currentPage
      let followPage = this
      followPage.page = p - 1
      if (followPage.name === '我') {
        followPage.getMyFollow()
      } else {
        followPage.getMyFollow()
      }
    }
  }
}
</script>
<style>

</style>
