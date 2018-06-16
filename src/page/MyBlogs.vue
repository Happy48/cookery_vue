<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <div class="col-md-3 categories-grid" style="padding-left: 50px">
          <NoteLabel :list="noteLabelData"></NoteLabel>
          <CollectLabel :list="collectData"></CollectLabel>
          <AttentionLabel :list="attentionData"></AttentionLabel>
          <OtherLikeLabel :list="otherLikeData" :title="likeLabelTitle"></OtherLikeLabel>

        </div>
        <blog-list :name="name"></blog-list>
        <div class="clearfix"> </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import NoteLabel from '@/components/NoteLabel'
import CollectLabel from '@/components/CollectLabel'
import AttentionLabel from '@/components/AttentionLabel'
import OtherLikeLabel from '@/components/OtherLikeLabel'
import BlogList from '@/components/BlogList'
import api from '@/api/getData'
export default {
  stores: {
    token: 'state.token'
  },
  data () {
    return {
      noteLabelData: [
        {
          name: '早饭',
          id: 1
        },
        {
          name: '中饭',
          id: 2
        },
        {
          name: '晚餐',
          id: 3
        },
        {
          name: '甜点',
          id: 4
        }
      ],
      collectData: [
        '早饭',
        '午饭',
        '晚饭',
        '甜品'
      ],
      attentionData: [
        '朋友',
        '同事',
        '更多'
      ],
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
      name: '我'
    }
  },
  components: {
    SubTitle,
    Footer,
    NoteLabel,
    CollectLabel,
    OtherLikeLabel,
    AttentionLabel,
    BlogList
  },
  created () {
    this.getNoteLabel()
  },
  methods: {
    getNoteLabel () {
      let info = {
        token: this.token,
        name: ''
      }
      api.getUserTagList(info).then().catch(res => {
        console.log(res.data)
        this.noteLabelData = res.data
      })
    }
  }
}
</script>
<style>
</style>
