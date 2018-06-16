<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4 >{{title}}</h4>
    <div :key="item.foodPic" v-for="item in list" class="product-go">
      <a @click="showMore(item.noteId)" class="fashion"><img class="like_img" :src="item.foodPic" alt=""></a>
      <div class="grid-product">
        <div class="line-limit-length"><a @click="showMore(item.noteId)" class="elit ">{{item.foodTitle}}</a></div>
        <p class="likelist-limit-length">{{item.foodDesc}}</p>
      </div>
      <div class="clearfix"> </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'list',
    'title'
  ],
  methods: {
    showMore (noteID) {
      this.$router.push({
        name: 'blogDetail',
        params: {
          noteID: noteID,
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
