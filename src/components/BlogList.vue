<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-8" style="padding-top:15px "> {{name}}的笔记 </h4>
        <div class="search col-md-4">
          <form>
            <input v-model="searchContent" type="text" placeholder="搜索笔记/食材" required="" >
            <input type="submit" value="" @click="search">
          </form>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <div :key="item.index" class="events-bottom" v-for="item in collectList">
      <CollectItem :url="item.foodPic" :title="item.foodTitle" :description="item.foodDesc" direction="left"></CollectItem>
    </div>
    <div style="width:75% ;margin: 0 auto">
      <Pagination :total="total" :current-page='current' @pagechange="pagechange" ref="pagi"></Pagination>
    </div>
  </div>
</template>
<script>
import CollectItem from '@/components/CollectItem'
import api from '@/api/getData'
import Pagination from '@/components/Pagination'
export default {
  stores: {
    token: 'state.token'
  },
  props: [
    'name'
  ],
  data () {
    return {
      collectList: [
        {
          foodPic: '/static/images/ev.jpg',
          foodTitle: '土司的9种经典吃法',
          foodDesc: '土司的吃法应该可以做到365天不变样，我给恩泽同学经常做的大概就是这9种经典吃法。Yummy Yummy Yummy！',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 0,
          foodLikes: 0
        },
        {
          foodPic: '/static/images/ev1.jpg',
          foodTitle: '全套正宗英式早餐',
          foodDesc: '英国人很懒的，所谓英式早餐一般从十一点开始供应，但是菜品丰富。早上起床做早餐給家人吃是一件很幸福的事',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 0,
          foodLikes: 0
        },
        {
          foodPic: '/static/images/ev2.jpg',
          foodTitle: '超级浓超好喝的番茄土豆汤',
          foodDesc: '番茄汤是快手菜之一，用小美烧出来颜色味道都很浓郁！是奶奶一直做的汤，也是我喝过最好喝的番茄土豆汤',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 0,
          foodLikes: 0
        },
        {
          foodPic: '/static/images/ev3.jpg',
          foodTitle: '【丘比美食】凯撒沙拉',
          foodDesc: '凯撒沙拉被称为“沙拉之王”，常年坐镇西餐厅，给人高大上却难亲近的印象。丘比告诉你，这道菜在家也能轻松做！只要一瓶凯撒沙拉口味的丘比沙拉汁，就...',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 0,
          foodLikes: 0
        }
      ],
      searchContent: '',
      preSearch: '',
      page: 0,
      searchPage: 0,
      isSearched: false,
      total: 150,
      display: 5,
      current: 1
    }
  },
  created () {
    if (this.name === '我') {
      this.getMyNoteList()
    } else {
      this.getUserNoteList()
    }
  },
  components: {
    CollectItem,
    Pagination
  },
  methods: {
    getMyNoteList () {
      let listInfo = {
        token: this.token,
        page: this.page
      }
      api.getMyNoteList(listInfo).then(res => {}).catch(res => {
        this.collectList = res.data
        this.isSearched = false
      })
    },
    getUserNoteList () {
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
