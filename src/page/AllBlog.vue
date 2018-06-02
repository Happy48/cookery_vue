<template>
  <div>
    <SubTitle></SubTitle>
    <!--content-->
    <div class="content">
      <div class="events">
        <div class="col-md-3 categories-grid" style="padding-left: 50px">
          <blog-square-label></blog-square-label>

          <OtherLikeLabel :list="otherLikeData" :title="likeLabelTitle"></OtherLikeLabel>
        </div>
        <blog-class-list :name="currentChooseLabel"></blog-class-list>
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
      currentChooseLabel: '家常菜'
    }
  },
  components: {
    SubTitle,
    Footer,
    BlogSquareLabel,
    OtherLikeLabel,
    BlogClassList
  }
}
</script>
<style>
</style>
