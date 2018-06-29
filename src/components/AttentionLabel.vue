<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>{{who}}的关注</h4>
    <ul class="popular">
      <li :key="item" v-for="item in list" @click="goToList(item)" class="line-limit-length"><a href="#" ><i class="glyphicon glyphicon-user"> </i>{{item}}</a></li>
      <li><a class="all-tags" style="color: #005238"> &gt;&gt; {{showmore}} &lt;&lt; </a></li>
    </ul>
  </div>
</template>
<script>
import store from '@/store/todo_list.js'
export default {
  props: [
    'list',
    'name'
  ],
  data () {
    return {
      showmore: '查看更多'
    }
  },
  computed: {
    who: function () {
      return this.name === '我' ? this.name : '他'
    }
  },
  methods: {
    goToList (item) {
      console.log(item)
      store.save(item)
      this.$router.push({
        name: 'hisBlogs',
        params: {
          name: item
        }
      })
      // this.$router.push({
      //   name: 'Focus'
      // })
    }
  }
}
</script>
<style>
</style>
