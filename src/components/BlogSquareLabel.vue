<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <h4>笔记广场</h4>
    <ul class="popular">
      <li :key="item.index" v-for="(item,$index) in list" v-if='$index<10' :class="{ active: item.name ===currentLabel}" @click="getBlogList(item.index,item.name)">
        <a href="#">
          <i class="glyphicon glyphicon-tags"> </i>{{item.name}}
        </a>
      </li>
      <li><a class="all-tags" style="color: #005238" @click="allTag()"> &gt;&gt; 全部笔记分类 &lt;&lt; </a></li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/getData'
export default {
  props: [
    'currentLabel'
  ],
  data () {
    return {
      list: [
        {
          name: '家常菜',
          id: ''
        }
      ],
      blogList: [
        {
          foodPic: '/static/images/ev.jpg',
          foodTitle: '土司的9种经典吃法',
          foodDesc: '土司的吃法应该可以做到365天不变样，我给恩泽同学经常做的大概就是这9种经典吃法。Yummy Yummy Yummy！',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 0,
          foodLikes: 0
        }
      ]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    allTag () {
      this.$router.push({
        name: 'AllTag'
      })
    },
    getList () {
      api.getList().then().catch(res => {
        this.list = res.data
      })
    },
    getBlogList (index, name) {
      this.num = index
      this.$emit('getBlogListByClass', name)
    }
  }
}
</script>
<style>
</style>
