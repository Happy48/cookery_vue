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

    <div class="menu-bottom animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <focus-item :key="subItem.icon" v-for="subItem in forcusList"  :url="subItem.icon" :name="subItem.name"></focus-item>
      <div class="clearfix"> </div>
    </div>
    <!--<div :key="item.index" v-for="item in forcusList" class="menu-bottom animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">-->
      <!--<focus-item :key="subItem.icon" v-for="subItem in item"  :url="subItem.icon" :name="subItem.name"></focus-item>-->
      <!--<div class="clearfix"> </div>-->
    <!--</div>-->
  </div>
</template>
<script>
import FocusItem from '@/components/FocusItem'
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
      forcusList: [
          {
            icon: '/static/images/me.jpg',
            name: 'Lorem'
          },
          {
            icon: '/static/images/me1.jpg',
            name: 'Lorem'
          },
          {
            icon: '/static/images/me2.jpg',
            name: 'Lorem'
          }
      ]
    }
  },
  created () {
    if (this.name === '我') {
      this.getMyFollow()
    }
  },
  components: {
    FocusItem
  },
  methods: {
    getMyFollow () {
      let list = {token: this.token}
      api.getMyFollowList(list).then(res => {}).catch(res => { this.forcusList = res.data })
    }
  }
}
</script>
<style>

</style>
