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
        <CreateBlog></CreateBlog>
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
import CreateBlog from '@/components/CreateBlog'

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
      likeLabelTitle: '你关注的人也喜欢'
    }
  },
  components: {
    SubTitle,
    Footer,
    NoteLabel,
    CollectLabel,
    AttentionLabel,
    OtherLikeLabel,
    CreateBlog
  }
}
</script>
<style>
</style>
