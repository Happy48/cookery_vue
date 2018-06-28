<template>
  <div>
    <SubTitle :from="'allblog'" v-on:search="search"></SubTitle>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :currentLabel="currentChooseLabel" v-on:getBlogListByClass="getBlogListByClass"></LeftPart>
        <div class="col-md-9" style="padding-right:50px">
          <vue-loading v-if="isLoading" type="bubbles" color="#0d6167" :size="{width: '200px', height: '200px'}"></vue-loading>
          <blog-class-list v-if="isLoading==false&&list.length!==0" :name="currentChooseLabel" :list="list"></blog-class-list>
          <div  v-if="isLoading==false&&list.length===0" style="align-items: center">
            <img src="/static/images/searchBlank.png" width="400px" style="margin:10px 150px"/>
            <h4 style="text-align: center">您搜索的商品不存在，请换一组关键词</h4>
          </div>
          <Pagination v-if="isLoading==false&&list.length!==0" style="margin-top:-50px " :total="total" :current-page='current' @pagechange="pagechange" ref="pagi" :display='display'></Pagination>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import BlogClassList from '@/components/BlogClassList'
import Pagination from '@/components/Pagination'
import api from '@/api/getData'
import LeftPart from '@/components/LeftPart'
import { VueLoading } from 'vue-loading-template'
export default {
  data () {
    return {
      currentChooseLabel: '全部菜品',
      list: [],
      total: 15,
      display: 9,
      current: 1,
      tagName: '',
      where: 'All',
      isLoading: true
    }
  },
  components: {
    SubTitle,
    Footer,
    BlogClassList,
    Pagination,
    LeftPart,
    VueLoading
  },
  created () {
    var label = this.$route.params.currentChooseLabel
    if (label === '搜索结果') {
      this.search(this.$route.params.query)
    } else if (label !== '全部菜品') {
      this.getBlogListByClass(this.$route.params.currentChooseLabel)
    }
  },
  methods: {
    search (param) {
      this.currentChooseLabel = '搜索结果'
      console.log('搜索' + param)
      let query = param
      api.search(query, 0).then().catch(res => {
        this.list = res.data
        this.isLoading = false
      })
    },
    getBlogListByClass (param) {
      this.tagName = param
      this.currentChooseLabel = param
      api.getNoteList({ class: this.tagName, page: this.current - 1 }).then().catch(res => {
        this.list = res.data
        this.isLoading = false
      })
      api.getNoteListTotal({ class: this.tagName }).then().catch(res => {
        this.total = res.data
      })
    },
    pagechange: function (currentPage) {
      api.getNoteList({ class: this.tagName, page: currentPage - 1 }).then().catch(res => {
        this.list = res.data
        this.isLoading = false
      })
    }
  }
}
</script>
<style>
</style>
