<template>
    <div>
      <div v-show="workList.length > 0">
        <h4 style="margin-bottom: 20px">参照这个菜谱，大家做出了{{workList.length}}个作品</h4>
        <div>
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide :key="item.index" v-for="item in workList">
              <IndexWork :userId="item.userId" :picture="item.picture" :desc="item.desc" :userName="item.userName" >
              </IndexWork>
            </swiper-slide>
            <swiper-slide >
              <div class="food-grid animated wow fadeInUp" style="margin: 20px" data-wow-duration="1000ms" data-wow-delay="500ms">
                <a><i  @click="createPage(noteName,noteId)" class="fa fa-plus-circle" style="color:#005238;font-size: 80px; padding-top: 90px"></i></a>
              </div>
             </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-container" slot="slidesOffsetBefore"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div id="uploadWorkButton" style="margin-top:20px;margin-bottom: 40px"><a @click="createPage(noteName,noteId)">上传你做的{{noteName}}</a></div>
    </div>
</template>
<script>
import IndexWork from '@/components/IndexWork'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: [
    'workList', 'noteName', 'noteId'
  ],
  created () {
  },
  data () {
    return {
      swiperOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        grabCursor: true,
        setWrapperSize: true,
        mousewheelControl: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next', // 前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev' // 后退按钮的css选择器或HTML元素。
        },
        slidesOffsetBefore: 50,
        slidesOffsetAfter: 50,
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      names: this.name,
      number: 2273
    }
  },
  components: {
    IndexWork,
    swiper,
    swiperSlide
  },
  methods: {
    createPage (noteName, noteId) {
      this.$router.push({
        name: 'createWork',
        params: {
          noteID: noteId,
          noteName: noteName
        }
      })
    }
  }
}
</script>
<style scoped>
  .swiper-button-next{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23005238'%2F%3E%3C%2Fsvg%3E");}
  .swiper-button-prev{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23005238'%2F%3E%3C%2Fsvg%3E");}
  #uploadWorkButton{
    width:100%;
    background:rgb(14, 92, 67);
    color:#fff;
    font-size:17px;
    padding:10px;
    text-align:center;
  }
  #uploadWorkButton a{
    color:#fff;
    text-decoration: none;
  }
</style>
