<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="name" :name="name"></LeftPart>
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
      name: this.$route.params.name
    }
  },
  components: {
    SubTitle,
    Footer,
    LeftPart,
    BlogList
  }
}
</script>
<style>
</style>
