<template>
  <div  @click="showMore" class="news-bottom1 animated wow fadeInUp indexblog" data-wow-duration="1000ms" data-wow-delay="500ms">
    <div class="indexFocus-pic" :style="{backgroundImage:'url(' + icon + ')'}"></div>
    <h3 class="indexblog-title line-limit-length">{{focus}}</h3>
    <p class="indexblog-desc line-limit-length">{{desc}}</p>
  </div>
</template>
<script>
import store from '@/store/todo_list.js'
export default {
  props: [
    'focus',
    'icon',
    'name',
    'where'
  ],
  data () {
    return {
      'desc': '最近发表于1天前'
    }
  },
  computed: {
    urlStyle: function () {
      return 'url(' + this.url + ') no-repeat'
    }
  },
  methods: {
    showMore () {
      store.save(this.name)
      this.$router.push({
        name: 'hisBlogs',
        params: {
          name: this.name
        }
      })
    }
  }
}
</script>
<style>
</style>
