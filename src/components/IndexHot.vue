<template>
  <div  @click="showMore" class="news-bottom1 animated wow fadeInUp indexblog" data-wow-duration="1000ms" data-wow-delay="500ms">
    <div class="indexblog-pic" :style="{backgroundImage:'url(' + foodPic + ')'}"></div>
    <h3 class="indexblog-title line-limit-length">{{foodTitle}}</h3>
    <p class="indexhot-desc">
      <span class="indexblog-time">{{foodCreateTime}}</span>
      <a class="comments"><i class="glyphicon glyphicon-star"></i>{{foodCollect}}</a>
      <a class="likes"><i class="glyphicon glyphicon-heart"></i>{{foodLikes}}</a>
    </p>
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
    urlStyle: function () {
      return 'url(' + this.url + ') no-repeat'
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
<style>
</style>
