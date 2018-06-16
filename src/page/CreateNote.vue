<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
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
import CreateBlog from '@/components/CreateBlog'
import api from '@/api/getData'
import LeftPart from '@/components/LeftPart'
export default {
  data () {
    return {
      where: '我',
      name: '我'
    }
  },
  components: {
    SubTitle,
    Footer,
    CreateBlog,
    LeftPart
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
