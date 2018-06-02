<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>笔记广场</h4>
    <ul class="popular">
      <li :key="item.index" v-for="item in list"><a href="#"><i class="glyphicon glyphicon-menu-right"> </i>{{item.name}}</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '家常菜',
          url: ''
        },
        {
          name: '快手菜',
          url: ''
        },
        {
          name: '下饭菜',
          url: ''
        },
        {
          name: '早餐',
          url: ''
        },
        {
          name: '家常菜',
          url: ''
        },
        {
          name: '快手菜',
          url: ''
        },
        {
          name: '下饭菜',
          url: ''
        },
        {
          name: '早餐',
          url: ''
        }
      ]
    }
  }
}
</script>
<style>
</style>
