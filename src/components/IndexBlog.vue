<template>
  <div  @click="showMore" class="food-grid animated wow fadeInUp indexblog" data-wow-duration="1000ms" data-wow-delay="500ms">
      <img class="indexblog-pic" :src="foodPic"/>
      <h3 class="indexblog-title line-limit-length">{{foodTitle}}</h3>
      <p class="indexblog-desc line-limit-length">{{foodDesc}}</p>
  </div>
</template>
<script>
import api from '@/api/getData'
import store from '@/store/todo_list.js'
export default {
  props: [
    'foodPic',
    'foodTitle',
    'foodDesc',
    'foodLikes',
    'foodCreateTime',
    'foodCollect',
    'noteId',
    'name',
    'where'
  ],
  computed: {
    urlTopStyle: function () {
      return 'url(' + this.url + ') top'
    },
    urlBottomStyle: function () {
      return 'url(' + this.url + ') bottom'
    }
  },
  methods: {
    showMore () {
      let information = {
        noteId: this.noteId
      }
      api.getNoteDetail(information).then().catch(res => {
        let note = res.data
        this.name = note.userVO.userName
        store.save(this.name)
        console.log(this.name + ' detail')
      })
      this.$router.push({
        name: 'blogDetail',
        params: {
          noteID: this.noteId,
          name: this.name,
          where: this.where,
          foodTitle: this.foodTitle,
          foodDesc: this.foodDesc,
          foodPic: this.foodPic
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
