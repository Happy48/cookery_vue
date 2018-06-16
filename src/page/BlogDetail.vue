<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
        <blog-detail-component></blog-detail-component>
        <div class="clearfix"> </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import BlogDetailComponent from '@/components/BlogDetailComponent'
import LeftPart from '@/components/LeftPart'

export default {
  data () {
    return {
      name: this.$route.params.name,
      where: this.$route.params.where
    }
  },
  components: {
    SubTitle,
    Footer,
    LeftPart,
    BlogDetailComponent
  }
}
</script>
<style>
</style>
