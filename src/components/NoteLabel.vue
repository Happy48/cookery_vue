<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>笔记标签</h4>
    <ul class="popular">
      <li :key="item.index" v-for="(item,$index) in list" v-if='isExpand($index)' ><a href="#"><i class="glyphicon glyphicon-tags"> </i>{{item.name}}</a></li>
      <li><a class="all-tags" style="color: #005238" @click="showMore"> &gt;&gt; {{showmore}} &lt;&lt; </a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: [
    'list'
  ],
  data () {
    return {
      num: 5,
      showmore: '查看更多'
    }
  },
  methods: {
    showMore () {
      if (this.showmore === '查看更多') {
        this.num = this.list.length
        this.showmore = '向上收起'
      } else {
        this.showmore = '查看更多'
        this.num = 5
      }
    },
    isExpand (index) {
      return (this.num > index)
    }
  }
}
</script>
<style>
</style>
