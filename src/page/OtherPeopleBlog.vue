<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <div class="col-md-3 categories-grid" style="padding-left: 50px">
          <NoteLabel :list="noteLabelData"></NoteLabel>
          <AttentionLabel :list="attentionData"></AttentionLabel>
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
import AttentionLabel from '@/components/AttentionLabel'
import BlogList from '@/components/BlogList'

export default {
  data () {
    return {
      noteLabelData: [
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
      name: '***大厨'
    }
  },
  components: {
    SubTitle,
    Footer,
    NoteLabel,
    AttentionLabel,
    BlogList
  }
}
</script>
<style>
</style>
