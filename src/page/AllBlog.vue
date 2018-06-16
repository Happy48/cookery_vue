<template>
  <div>
    <SubTitle></SubTitle>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" v-on:getBlogListByClass="getBlogListByClass"></LeftPart>
        <div class="col-md-9" style="padding-right:50px">
          <blog-class-list :name="currentChooseLabel" :list="list"></blog-class-list>
          <Pagination style="margin-top:-50px " :total="total" :current-page='current' @pagechange="pagechange" ref="pagi" :display='display'></Pagination>
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
export default {
  data () {
    return {
      currentChooseLabel: '全部菜品',
      list: [],
      total: 15,
      display: 9,
      current: 1,
      tagName: '',
      where: 'All'
    }
  },
  components: {
    SubTitle,
    Footer,
    BlogClassList,
    Pagination,
    LeftPart
  },
  methods: {
    reduceArray (arr, count) {
      let len = []
      let ar = []
      let k = 0
      if (arr.length % count === 0) {
        len = parseInt(arr.length / count)
      } else {
        len = parseInt(arr.length / count) + 1
      }
      for (let i = 0; i < len; i++) {
        if (ar[i]) {
          ar[i] = ar[i]
        } else {
          ar[i] = []
        }
        for (let a = 0; a < count; a++) {
          ar[i][a] = arr[k]
          if (ar[i][a] === undefined) {
            ar[i].length = arr.length % count
          }
          k++
        }
      }
      return ar
    },
    search () {
      this.currentChooseLabel = this.$route.params.title
      let query = this.$route.params.query
      api.search(query, 0).then().catch(res => {
        console.log(res.data)
        this.list = this.reduceArray(res.data, 3)
      })
      console.log(this.list)
    },
    getBlogListByClass (param) {
      this.tagName = param
      this.currentChooseLabel = param
      api.getNoteList({ class: this.tagName, page: this.current - 1 }).then().catch(res => {
        this.list = res.data
      })
      api.getNoteListTotal({ class: this.tagName }).then().catch(res => {
        this.total = res.data
      })
    },
    pagechange: function (currentPage) {
      api.getNoteList({ class: this.tagName, page: currentPage - 1 }).then().catch(res => {
        this.list = res.data
      })
    }
  }
}
</script>
<style>
</style>
