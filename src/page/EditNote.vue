<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
        <EditBlog v-if="isNotCreated" @createSucc="createSuccess" :noteID="noteID"></EditBlog>
        <CreateSucc v-if="isCreated" :pageTitle="pageTitle" :noteID="noteID" :stateInfo="stateInfo"></CreateSucc>
        <div class="clearfix"> </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import EditBlog from '@/components/EditBlog'
import LeftPart from '@/components/LeftPart'
import CreateSucc from '@/components/CreateSucc'
export default {
  data () {
    return {
      where: '我',
      name: '我',
      createState: false,
      pageTitle: '修改菜谱',
      noteID: this.$route.params.noteID,
      stateInfo: '修改成功'
    }
  },
  components: {
    SubTitle,
    Footer,
    EditBlog,
    LeftPart,
    CreateSucc
  },
  methods: {
    createSuccess (params) {
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
