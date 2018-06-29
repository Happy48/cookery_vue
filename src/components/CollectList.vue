<template>
  <div class="col-md-9" style="padding-right: 50px;padding-left:50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-8" style="padding-top:15px "> 我的收藏 </h4>
        <div class="search col-md-4" style="margin-top: 10px">
          <form>
            <input @keyup.enter="search" v-model="searchText" type="text" placeholder="搜索笔记/食材" required="" >
            <input @click='search' type="submit" value="" >
          </form>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <vue-loading v-if="isLoading" type="bubbles" color="#0d6167" :size="{width: '200px', height: '200px'}"></vue-loading>
    <div v-if='isLoading==false&&collectList.length===0' style="align-items: center">
      <img src="/static/images/searchBlank.png" width="400px" style="margin:10px 150px"/>
      <h4 style="text-align: center">收藏的作品会出现在这里哟～</h4>
    </div>
    <div v-if="isLoading==false&&collectList.length!==0" :key="item.noteId" class="events-bottom" v-for="item in collectList">
      <CollectItem :foodPic="item.foodPic" :foodTitle="item.foodTitle" :foodDesc="item.foodDesc" direction="left" :foodLikes="item.foodLikes" :foodCreateTime="item.foodCreateTime" :foodCollect="item.foodCollect"  :noteId="item.noteId" :name="names" :where="names"></CollectItem>
      <!--<CollectItem :url="item.foodPic" :title="item.foodTitle" :description="item.foodDesc" direction="right"></CollectItem>-->
    </div>
    <div v-if="isLoading==false&&collectList.length!==0" style="width:75% ;margin: 0 auto">
      <Pagination :total="total" :current-page='current' ref="pagi"></Pagination>
    </div>
  </div>
</template>
<script>
import CollectItem from '@/components/CollectItem'
import api from '@/api/getData'
import Pagination from '@/components/Pagination'
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
      preSearch: '',
      page: 1,
      searchPage: 0,
      isSearched: false,
      total: 1,
      current: 1,
      names: this.name,
      searchText: '',
      isLoading: true
    }
  },
  created () {
    if (this.name === '我') {
      this.getMyNoteList()
    }
  },
  components: {
    CollectItem,
    Pagination,
    VueLoading
  },
  methods: {
    getMyNoteList () {
      let listInfo = {
        token: this.token
      }
      api.getUserCollection(listInfo).then(res => {}).catch(res => {
        this.collectList = res.data
        this.isLoading = false
      })
    },
    search () {
      let searchText = this.searchText
      this.collectList = this.collectList.filter(function (item) {
        return item.foodTitle.indexOf(searchText) !== -1 || item.foodDesc.indexOf(searchText) !== -1
      })
      console.log(this.collectList)
    }
  }
}
</script>
<style>

</style>
