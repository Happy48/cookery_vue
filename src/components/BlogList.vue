<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-8" style="padding-top:15px "> {{names}}的笔记 </h4>
        <div class="search col-md-4">
          <form>
            <input v-model="searchContent" type="text" placeholder="搜索笔记/食材" required="" >
            <input type="submit" value="" @click="search">
          </form>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <vue-loading v-if="isLoading" type="bubbles" color="#0d6167" :size="{width: '200px', height: '200px'}"></vue-loading>
    <div v-if='isLoading==false&&collectList.length===0' style="align-items: center">
      <img src="/static/images/searchBlank.png" width="400px" style="margin:10px 150px"/>
      <h4 style="text-align: center">我的笔记会出现在这里哟～</h4>
    </div>
    <div v-if="isLoading==false&&collectList.length!==0" :key="item.index" class="events-bottom" v-for="item in collectList">
      <CollectItem :foodPic="item.foodPic" :foodTitle="item.foodTitle" :foodDesc="item.foodDesc" direction="left" :foodLikes="item.foodLikes" :foodCreateTime="item.foodCreateTime" :foodCollect="item.foodCollect"  :noteId="item.noteId" :name="names" :where="names"></CollectItem>
    </div>
    <div v-if="isLoading==false&&collectList.length!==0" style="width:75% ;margin: 0 auto">
      <Pagination :total="total" :current-page='current' @pagechange="pagechange" ref="pagi"></Pagination>
    </div>
  </div>
</template>
<script>
import CollectItem from '@/components/CollectItem'
import api from '@/api/getData'
import Pagination from '@/components/Pagination'
import store from '@/store/todo_list.js'
import { VueLoading } from 'vue-loading-template'

export default {
  stores: {
    token: 'state.token'
  },
  props: [
    'name'
  ],
  data () {
    return {
      collectList: [],
      searchContent: '',
      preSearch: '',
      page: 0,
      searchPage: 0,
      isSearched: false,
      total: 150,
      current: 1,
      names: this.name,
      isLoading: true
    }
  },
  created () {
    if (this.name === '我') {
      this.getMyNoteList()
    } else {
      console.log(this.name)
      this.name = store.fetch()
      this.names = store.fetch()
      this.getUserNoteList()
    }
  },
  components: {
    CollectItem,
    Pagination,
    VueLoading
  },
  methods: {
    getMyNoteList () {
      let list = {token: this.token}
      api.getMyNoteListTotal(list).then(res => {}).catch(res => { this.total = res.data })
      let listInfo = {
        token: this.token,
        page: this.page
      }
      api.getMyNoteList(listInfo).then(res => {}).catch(res => {
        this.collectList = res.data
        this.isSearched = false
        this.isLoading=false
      })
    },
    getUserNoteList () {
      let list = {name: this.name}
      api.getNoteListTotalByUserID(list).then(res => {}).catch(res => { this.total = res.data })
      let listInfo = {
        name: this.name,
        page: this.page
      }
      api.getUserNoteList(listInfo).then(res => {}).catch(res => {
        this.collectList = res.data
        this.isSearched = false
      })
    },
    search () {
      if (this.preSearch !== this.searchContent) {
        this.searchPage = 0
        this.$refs.pagi.setPage(1)
      }
      if (this.name === '我') {
        this.searchMyBlog()
      } else {
        this.searchFromPeople()
      }
      this.preSearch = this.searchContent
    },
    searchFromPeople () {
      if (this.preSearch !== this.searchContent) {
        let searchKey = {
          name: this.name,
          key: this.searchContent
        }
        api.searchFromCertainPersonTotal(searchKey).then(res => {}).catch(res => {
          this.total = res.data
        })
      }
      let searchInfo = {
        name: this.name,
        key: this.searchContent,
        page: this.searchPage
      }
      api.searchFromPeople(searchInfo).then(res => {}).catch(res => {
        this.collectList = res.data
        this.isSearched = true
      })
    },
    searchMyBlog () {
      if (this.preSearch !== this.searchContent) {
        let searchKey = {
          token: this.token,
          key: this.searchContent
        }
        api.searchFromMyTotal(searchKey).then(res => {}).catch(res => {
          this.total = res.data
        })
      }
      let searchInfo = {
        token: this.token,
        key: this.searchContent,
        page: this.searchPage
      }
      api.searchMyBlog(searchInfo).then(res => {}).catch(res => {
        this.collectList = res.data
        this.isSearched = true
      })
    },
    pagechange: function (currentPage) {
      console.log(currentPage)
      var p = currentPage
      let blogpage = this
      if (blogpage.isSearched) {
        blogpage.searchPage = p - 1
        if (blogpage.name === '我') {
          blogpage.searchMyBlog()
        } else {
          blogpage.searchFromPeople()
        }
      } else {
        blogpage.page = p - 1
        if (blogpage.name === '我') {
          blogpage.getMyNoteList()
        } else {
          blogpage.getUserNoteList()
        }
      }
    }
  }
}
</script>
<style>

</style>
