<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
        <workEdit :noteID="this.noteID" :noteName="this.noteName"></workEdit>
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
export default {
  data () {
    return {
      where: '我',
      name: '我',
      noteID: '',
      noteName: ''
    }
  },
  created () {
    this.initWork()
  },
  methods: {
    initWork () {
      this.noteID = this.$route.params.noteID
      this.noteName = this.$route.params.noteName
    }
  },
  components: {
    SubTitle,
    Footer,
    LeftPart,
    WorkEdit
  }
}
</script>
<style>
</style>
