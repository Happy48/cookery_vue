<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <div class="col-md-2 categories-grid" ></div>
    <div class="col-md-10 categories-grid" >
      <h2>全部分类</h2>
    </div>
    <br>
    <br>
    <br>
    <div class="col-md-2 categories-grid" ></div>
    <div class="col-md-8 categories-grid" style="border:3px solid rgb(14, 92, 67)">
      <ul class="popular">
        <li :key="item.index" v-for="(item) in list"  @click="jumpTag(item.name)"><a href="#"><i class="glyphicon glyphicon-tags"> </i>{{item.name}}</a></li>
      </ul>
    </div>
    <div class="col-md-2 categories-grid" ></div>
  </div>
</template>

<script>
import api from '@/api/getData'
export default {
  // name: 'TagList'
  data () {
    return {
      list: [
        {
          name: '家常菜',
          id: ''
        }
      ],
      num: -1
    }
  },
  created () {
    this.getTagList()
  },
  methods: {
    getTagList () {
      api.getList().then().catch(res => {
        this.list = res.data
      })
    },
    jumpTag (name) {
      this.$router.push({
        name: 'AllBlog',
        params: {
          currentChooseLabel: name,
          tagName: name,
          where: 'All'
        }
      })
    }
  }
}
</script>

<style scoped>
ul li{width:25%;float:left;}
ul{
  height: 400px;
}
ul > li{
  height: 20%;
}
</style>
