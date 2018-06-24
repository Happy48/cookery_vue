<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-12" style="padding-top:15px ">{{pageTitle}}</h4>
      </div>
      <div class="clearfix"> </div>
    </div>
    <hr />
    <div style="padding: 50px">
      <h3 style="text-align: center">
        <i  class="fa fa-check-circle-o" style="color:#005238;font-size: 32px;"></i>
        {{stateInfo}}
      </h3>
      <h4  style="text-align: center;margin-top: 30px"><a  @click="turnToBlgDetail">点击此处</a>，查看刚刚{{stateInfo}}的笔记</h4>
    </div>
  </div>
</template>

<script>
import api from '@/api/getData'
export default {
  props: [
    'pageTitle',
    'stateInfo',
    'noteID'
  ],
  created () {
    window.scrollTo(0, 0)
  },
  methods: {
    turnToBlgDetail () {
      api.getNoteInfo({noteID: this.noteID}).then(res => {
      }).catch(res => {
        let noteVO = res.data
        this.$router.push({
          name: 'blogDetail',
          params: {
            noteID: this.noteID,
            name: '我',
            where: '我',
            foodTitle: noteVO['foodTitle'],
            foodDesc: noteVO['foodDesc'],
            foodPic: noteVO['foodPic']
          }
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
