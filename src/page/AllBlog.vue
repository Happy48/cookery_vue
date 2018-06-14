<template>
  <div>
    <SubTitle></SubTitle>
    <!--content-->
    <div class="content">
      <div class="events">
        <div class="col-md-3 categories-grid" style="padding-left: 50px">
          <blog-square-label v-on:getBlogListByClass="getBlogListByClass"></blog-square-label>

          <OtherLikeLabel :list="otherLikeData" :title="likeLabelTitle"></OtherLikeLabel>
        </div>
        <blog-class-list :name="currentChooseLabel" :list="list"></blog-class-list>
      </div>
    </div>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import BlogSquareLabel from '@/components/BlogSquareLabel'
import OtherLikeLabel from '@/components/OtherLikeLabel'
import BlogClassList from '@/components/BlogClassList'
import api from '@/api/getData'
export default {
  data () {
    return {
      otherLikeData: [
        {
          'url': '/static/images/bo.jpg',
          'title': 'Consectetuer adipiscing',
          'desc': 'Lorem ipsum dolor sit amet'
        },
        {
          'url': '/static/images/bo1.jpg',
          'title': 'Consectetuer adipiscing',
          'desc': 'Lorem ipsum dolor sit amet'
        },
        {
          'url': '/static/images/bo2.jpg',
          'title': 'Consectetuer adipiscing',
          'desc': 'Lorem ipsum dolor sit amet'
        }
      ],
      likeLabelTitle: '你可能喜欢',
      currentChooseLabel: '家常菜',
      list: []
    }
  },
  components: {
    SubTitle,
    Footer,
    BlogSquareLabel,
    OtherLikeLabel,
    BlogClassList
  },
  created () {
    this.search()
    this.recommend()
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
    recommend () {
      let information = {
        number: 3
      }
      api.getGuessLike(information).then().catch(res => {
        let notes = res.data
        this.otherLikeData = notes
      })
    },
    getBlogListByClass (...param) {
      this.list = param
    }
  }
}
</script>
<style>
</style>
