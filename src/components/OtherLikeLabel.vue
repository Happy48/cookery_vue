<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4 >{{title}}</h4>
    <div :key="item.index" v-for="item in list" class="product-go">
      <a @click="showMore(item.noteId)" class="fashion"><div class="like_img" :style="{backgroundImage:'url(' + item.foodPic + ')'}" alt=""></div></a>
      <div class="grid-product">
        <div class="line-limit-length"><a @click="showMore(item.noteId)" class="elit ">{{item.foodTitle}}</a></div>
        <p class="likelist-limit-length">{{item.foodDesc}}</p>
      </div>
      <div class="clearfix"></div>
    </div>
    <div style="text-align: center;margin-top: 15px">
      <a @click="recommend">
        <span class="glyphicon glyphicon-refresh" aria-hidden="true">猜你喜欢</span>
      </a>
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
    },
    recommend () {
      let data = {}
      this.$emit('recommend', data)
    }
  }
}
</script>
<style>
</style>
