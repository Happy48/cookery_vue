<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>我的收藏</h4>
    <ul class="popular">
      <li :key="item.foodTitle" v-for="item in list" @click="goToList(item.noteId)" class="line-limit-length"><a href="#" ><i class="glyphicon glyphicon-bookmark"> </i>{{item.foodTitle}}</a></li>
      <li><a class="all-tags" style="color: #005238" > &gt;&gt; {{showmore}} &lt;&lt; </a></li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/getData'
export default {
  props: [
    'list'
  ],
  data () {
    return {
      showmore: '查看更多'
    }
  },
  methods: {
    goToList (foodTitle) {
      let info = {
        noteId: foodTitle,
        name: ''
      }
      api.getNoteDetail(info).then().catch(res => {
        let note = res.data
        this.$router.push({
          name: 'blogDetail',
          params: {
            noteID: note.noteId,
            name: this.name,
            where: this.where,
            foodTitle: foodTitle,
            foodDesc: this.foodDesc,
            foodPic: this.foodPic
          }
        })
      })

      // this.$router.push({
      //   name: 'Collect'
      // })
    }
  }
}
</script>
<style>
</style>
