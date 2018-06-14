<template>
  <div>
    <SubTitle></SubTitle>
    <!--content-->
    <div class="content">
      <div class="events">
        <div class="col-md-3 categories-grid" style="padding-left: 50px">
          <NoteLabel :list="noteLabelData"></NoteLabel>
          <CollectLabel :list="collectData"></CollectLabel>
          <AttentionLabel :list="attentionData"></AttentionLabel>
          <OtherLikeLabel :list="otherLikeData" :title="likeLabelTitle"></OtherLikeLabel>

        </div>
        <collect-list :name="name"></collect-list>

      </div>
    </div>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import NoteLabel from '@/components/NoteLabel'
import CollectLabel from '@/components/CollectLabel'
import AttentionLabel from '@/components/AttentionLabel'
import OtherLikeLabel from '@/components/OtherLikeLabel'
import CollectList from '@/components/CollectList'
import api from '@/api/getData'

export default {
  data () {
    return {
      noteLabelData: [
        '早饭',
        '午饭',
        '晚饭',
        '甜品'
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
          'foodPic': '/static/images/bo.jpg',
          'foodTitle': 'Consectetuer adipiscing',
          'foodDesc': 'Lorem ipsum dolor sit amet'
        },
        {
          'foodPic': '/static/images/bo1.jpg',
          'foodTitle': 'Consectetuer adipiscing',
          'foodDesc': 'Lorem ipsum dolor sit amet'
        },
        {
          'foodPic': '/static/images/bo2.jpg',
          'foodTitle': 'Consectetuer adipiscing',
          'foodDesc': 'Lorem ipsum dolor sit amet'
        }
      ],
      likeLabelTitle: '你关注的人也喜欢',
      name: '我'
    }
  },
  components: {
    SubTitle,
    Footer,
    NoteLabel,
    CollectLabel,
    AttentionLabel,
    OtherLikeLabel,
    CollectList
  },
  created () {
    this.recommend()
  },
  methods: {
    recommend () {
      let information = {
        number: 3
      }
      api.getGuessLike(information).then().catch(res => {
        let notes = res.data
        this.otherLikeData = notes
      })
    }
  }
}
</script>
<style>
</style>
