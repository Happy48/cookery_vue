<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>笔记广场</h4>
    <ul class="popular">
      <li :key="item.index" v-for="item in list"><a href="#"><i class="glyphicon glyphicon-menu-right"> </i>{{item.name}}</a></li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/getData'
export default {
  data () {
    return {
      list: [
        {
          name: '家常菜',
          id: ''
        }
      ]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      api.getList().then().catch(res => {
        this.list = res.data
      })
    }
  }
}
</script>
<style>
</style>
