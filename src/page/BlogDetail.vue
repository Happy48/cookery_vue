<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart v-on:getBlogListByClass="getBlogListByClass" :where="where" :name="name" :currentLabel="tag"></LeftPart>
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
import api from '@/api/getData'

export default {
  data () {
    return {
      name: this.$route.params.name,
      where: this.$route.params.where,
      tag: ''
    }
  },
  components: {
    SubTitle,
    Footer,
    LeftPart,
    BlogDetailComponent
  },
  created () {
    this.noteId = this.$route.params.noteID
    let information = {
      noteId: this.noteId
    }
    api.getTagByNoteId(information).then().catch(res => {
      let taglist = res.data
      this.tag = taglist[0].name
    })
  },
  methods:{
    getBlogListByClass (param) {
      this.$router.push({
        name: 'AllBlog',
        params: {
          currentChooseLabel: param,
          tagName: param,
          name: '我',
          where: 'All'
        }
      })
    }
  }
}
</script>
<style>
</style>
