<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
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
import BlogList from '@/components/BlogList'
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
    BlogList,
    LeftPart
  }
}
</script>
<style>
</style>
