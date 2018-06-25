<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
        <CreateBlog v-if="isNotCreated" @createSucc="createSuccess"></CreateBlog>
        <CreateSucc v-if="isCreated" :pageTitle="pageTitle" :noteID="noteID" :stateInfo="stateInfo" :createType="createType"></CreateSucc>
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
import CreateSucc from '@/components/CreateSucc'
export default {
  data () {
    return {
      where: '我',
      name: '我',
      createState: false,
      pageTitle: '创建菜谱',
      noteID: '',
      stateInfo: '创建成功',
      createType: '笔记'
    }
  },
  components: {
    SubTitle,
    Footer,
    CreateBlog,
    LeftPart,
    CreateSucc
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
    },
    createSuccess (params) {
      this.noteID = params.noteID
      this.createState = true
    }
  },
  computed: {
    isCreated: function () {
      return this.createState
    },
    isNotCreated: function () {
      return !this.createState
    }
  }
}
</script>
<style>
</style>
