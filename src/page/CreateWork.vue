<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
        <workEdit v-if="isNotCreated" @createSucc="createSuccess" :noteID="this.noteID" :noteName="this.noteName"></workEdit>
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
import LeftPart from '@/components/LeftPart'
import WorkEdit from '@/components/WorkEdit'
import CreateSucc from '@/components/CreateSucc'
export default {
  data () {
    return {
      where: '我',
      name: '我',
      noteID: '',
      noteName: '',
      createState: false,
      pageTitle: '创建作品',
      stateInfo: '创建成功',
      createType: '作品'
    }
  },
  created () {
    this.initWork()
  },
  methods: {
    initWork () {
      this.noteID = this.$route.params.noteID
      this.noteName = this.$route.params.noteName
    },
    createSuccess (params) {
      this.createState = true
    }
  },
  components: {
    SubTitle,
    Footer,
    LeftPart,
    WorkEdit,
    CreateSucc
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
