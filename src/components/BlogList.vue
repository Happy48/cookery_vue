<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-8" style="padding-top:15px "> {{name}}的笔记 </h4>
        <div class="search col-md-4">
          <form>
            <input type="text" placeholder="Search" required="" >
            <input type="submit" value="" >
          </form>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <div :key="item.index" class="events-bottom" v-for="item in collectList">
      <CollectItem :url="item.url" :title="item.title" :description="item.description" :direction="item.direction"></CollectItem>
    </div>
    <div style="width:75% ;margin: 0 auto">
      <div class="tcdPageCode"></div>
    </div>
  </div>
</template>
<script>
import CollectItem from '@/components/CollectItem'
export default {
  props: [
    'name'
  ],
  data () {
    return {
      collectList: [
        {
          url: '/static/images/ev.jpg',
          title: '土司的9种经典吃法',
          description: '土司的吃法应该可以做到365天不变样，我给恩泽同学经常做的大概就是这9种经典吃法。Yummy Yummy Yummy！',
          direction: 'left'
        },
        {
          url: '/static/images/ev1.jpg',
          title: '全套正宗英式早餐',
          description: '英国人很懒的，所谓英式早餐一般从十一点开始供应，但是菜品丰富。早上起床做早餐給家人吃是一件很幸福的事',
          direction: 'right'
        },
        {
          url: '/static/images/ev2.jpg',
          title: '超级浓超好喝的番茄土豆汤',
          description: '番茄汤是快手菜之一，用小美烧出来颜色味道都很浓郁！是奶奶一直做的汤，也是我喝过最好喝的番茄土豆汤',
          direction: 'left'
        },
        {
          url: '/static/images/ev3.jpg',
          title: '【丘比美食】凯撒沙拉',
          description: '凯撒沙拉被称为“沙拉之王”，常年坐镇西餐厅，给人高大上却难亲近的印象。丘比告诉你，这道菜在家也能轻松做！只要一瓶凯撒沙拉口味的丘比沙拉汁，就...',
          direction: 'right'
        }
      ]
    }
  },
  components: {
    CollectItem
  }
}
</script>
<style>

</style>
