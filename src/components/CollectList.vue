<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-8" style="padding-top:15px "> 我的收藏 </h4>
        <div class="search col-md-4">
          <form>
            <input @keyup.enter="search" v-model="searchText" type="text" placeholder="搜索笔记/食材" required="" >
            <input @click='search' type="submit" value="" >
          </form>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <div v-if='collectList.length===0' style="align-items: center">
      <img src="/static/images/searchBlank.png" width="500px"/>
      <p>收藏的作品会出现在这里哟～</p>
    </div>
    <div v-if="collectList.length!==0" :key="item.noteId" class="events-bottom" v-for="item in collectList">
      <CollectItem :foodPic="item.foodPic" :foodTitle="item.foodTitle" :foodDesc="item.foodDesc" direction="left" :foodLikes="item.foodLikes" :foodCreateTime="item.foodCreateTime" :foodCollect="item.foodCollect"  :noteId="item.noteId" :name="names" :where="names"></CollectItem>
      <!--<CollectItem :url="item.foodPic" :title="item.foodTitle" :description="item.foodDesc" direction="right"></CollectItem>-->
    </div>
    <div style="width:75% ;margin: 0 auto">
      <div class="tcdPageCode"></div>
    </div>
  </div>
</template>
<script>
import CollectItem from '@/components/CollectItem'
import api from '@/api/getData'

export default {
  stores: {
    token: 'state.token'
  },
  props: [
    'name'
  ],
  data () {
    return {
      collectList: [
        {
          foodPic: '/static/images/ev.jpg',
          foodTitle: '土司的9种经典吃法',
          foodDesc: '土司的吃法应该可以做到365天不变样，我给恩泽同学经常做的大概就是这9种经典吃法。Yummy Yummy Yummy！',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 1,
          foodLikes: 0
        },
        {
          foodPic: '/static/images/ev1.jpg',
          foodTitle: '全套正宗英式早餐',
          foodDesc: '英国人很懒的，所谓英式早餐一般从十一点开始供应，但是菜品丰富。早上起床做早餐給家人吃是一件很幸福的事',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 2,
          foodLikes: 0
        },
        {
          foodPic: '/static/images/ev2.jpg',
          foodTitle: '超级浓超好喝的番茄土豆汤',
          foodDesc: '番茄汤是快手菜之一，用小美烧出来颜色味道都很浓郁！是奶奶一直做的汤，也是我喝过最好喝的番茄土豆汤',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 3,
          foodLikes: 0
        },
        {
          foodPic: '/static/images/ev3.jpg',
          foodTitle: '【丘比美食】凯撒沙拉',
          foodDesc: '凯撒沙拉被称为“沙拉之王”，常年坐镇西餐厅，给人高大上却难亲近的印象。丘比告诉你，这道菜在家也能轻松做！只要一瓶凯撒沙拉口味的丘比沙拉汁，就...',
          foodCollect: 0,
          foodCreateTime: '',
          noteId: 4,
          foodLikes: 0
        }
      ],
      names: this.name,
      searchText: ''
    }
  },
  created () {
    if (this.name === '我') {
      this.getMyNoteList()
    }
  },
  components: {
    CollectItem
  },
  methods: {
    getMyNoteList () {
      let listInfo = {
        token: this.token
      }
      api.getUserCollection(listInfo).then(res => {}).catch(res => {
        this.collectList = res.data
        console.log(res.data)
      })
    },
    search () {
      let searchText = this.searchText
      this.collectList = this.collectList.filter(function (item) {
        return item.foodTitle.indexOf(searchText) !== -1 || item.foodDesc.indexOf(searchText) !== -1
      })
      console.log(this.collectList)
    }
  }
}
</script>
<style>

</style>
