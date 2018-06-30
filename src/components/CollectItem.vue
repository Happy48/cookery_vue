<template>
  <div class="events-bottom" style="box-shadow:2px 4px 10px #aaaaaa;">
    <div v-if="direction==='left'" class="col-md-4 events-bottom1 animated wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
      <a @click="showMore"><div :style="{backgroundImage:'url(' + foodPic + ')'}" alt="" class="col_img"></div></a>
    </div>
    <div class="col-md-8 events-bottom2 animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms" style="padding-left: 30px;padding-right: 30px">
      <h3 @click="showMore" class="line-limit-length">{{foodTitle}}</h3>
      <label><i class="glyphicon glyphicon-menu-up"></i></label>
      <div class="date">
        <span class="date-in"><i class="glyphicon glyphicon-calendar"> </i>{{foodCreateTime}}</span>
        <a @click="showMore" class="comments"><i class="glyphicon glyphicon-star"></i>{{foodCollect}}</a>
        <a @click="showMore" class="likes"><i class="glyphicon glyphicon-heart"></i>{{foodLikes}}</a>
        <div class="clearfix"> </div>
      </div>
      <p class="bloglist-limit-length">{{foodDesc}}</p>
    </div>
    <div class="clearfix"> </div>
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
    'direction',
    'foodLikes',
    'foodCreateTime',
    'foodCollect',
    'noteId',
    'name',
    'where'
  ],
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
