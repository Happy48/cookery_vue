<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-8" style="padding-top:15px "> 我的关注 </h4>
        <div class="search col-md-4">
          <form>
            <input type="text" placeholder="Search" required="" >
            <input type="submit" value="" >
          </form>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>

    <div :key="item.index" v-for="item in forcusList" class="menu-bottom animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <focus-item :key="subItem.index" v-for="subItem in item"  :url="subItem.url" :name="subItem.name"></focus-item>
      <div class="clearfix"> </div>
    </div>
  </div>
</template>
<script>
import FocusItem from '@/components/FocusItem'
export default {
  data () {
    return {
      forcusList: [
        [
          {
            url: '/static/images/me.jpg',
            name: 'Lorem'
          },
          {
            url: '/static/images/me1.jpg',
            name: 'Lorem'
          },
          {
            url: '/static/images/me2.jpg',
            name: 'Lorem'
          }
        ],
        [
          {
            url: '/static/images/me3.jpg',
            name: 'Lorem'
          },
          {
            url: '/static/images/me4.jpg',
            name: 'Lorem'
          },
          {
            url: '/static/images/me5.jpg',
            name: 'Lorem'
          }
        ],
        [
          {
            url: '/static/images/me6.jpg',
            name: 'Lorem'
          },
          {
            url: '/static/images/me7.jpg',
            name: 'Lorem'
          },
          {
            url: '/static/images/me8.jpg',
            name: 'Lorem'
          }
        ],
        [
          {
            url: '/static/images/me.jpg',
            name: 'Lorem'
          },
          {
            url: '/static/images/me1.jpg',
            name: 'Lorem'
          },
          {
            url: '/static/images/me2.jpg',
            name: 'Lorem'
          }
        ]
      ]
    }
  },
  components: {
    FocusItem
  }
}
</script>
<style>

</style>
