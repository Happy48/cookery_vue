<template>
  <div>
  <div class="carousel" @mouseenter="enter" @mouseleave="leave">
    <transition-group
      tag="ul"
      name="image"
      enter-active-class="animated lightSpeedIn"
      leave-active-class="animated lightSpeedOut"
    >
      <!--<li v-for='(image,index) in img' :key='index' v-show="index === mark">-->
      <li v-for='(item,index) in img' :key='index' v-show="index === mark">
      <a href="javascript:;">
          <!--<img :src="image">-->
        <img :src="item.picture">
      </a>
      </li>
    </transition-group>
    <div class="bullet">
        <span v-for="(item,index) in img.length" :class="{'active':index === mark}"
            @click="change(index)" :key="index"></span>
    </div>
    <div class="switch">
      <span class="prev" @click="prev">&lt;</span>
      <span class="next" @click="next">&gt;</span>
    </div>
  </div>
  </div>
</template>

<script>
import '../js/vue.min.js'
// import "http://www.jq22.com/jquery/jquery-1.10.2.js";
import '../js/jquery.min.js'

export default {
  props: [
    'img'
  ],
  data () {
    return {
      mark: 0,
      // img: [
      //   'http://s1.cdn.xiachufang.com/67be415888cf11e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
      //   'http://s2.cdn.xiachufang.com/c6288760889a11e6b87c0242ac110003_568w_568h.jpg?imageView2/2/w/660/interlace/1/q/90',
      //   'http://s2.cdn.xiachufang.com/6f68b7fc873111e6a9a10242ac110002_426w_640h.jpg?imageView2/2/w/660/interlace/1/q/90',
      //   'http://s2.cdn.xiachufang.com/43368cb6872911e6a9a10242ac110002_426w_640h.jpg?imageView2/2/w/660/interlace/1/q/90'
      // ],
      time: null
    }
  },
  methods: {// 添加方法
    change (i) {
      this.mark = i
    },
    prev () {
      this.mark--
      if (this.mark === -1) {
        this.mark = 3
        // return
      }
    },
    next () {
      this.mark++
      if (this.mark === 4) {
        this.mark = 0
        // return
      }
    },
    autoPlay () {
      this.mark++
      if (this.mark === 4) {
        this.mark = 0
        // return
      }
    },
    play () {
      this.time = setInterval(this.autoPlay, 3000)
    },
    enter () {
      console.log('enter')
      clearInterval(this.time)
    },
    leave () {
      console.log('leave')
      this.play()
    }
  },
  created () {
    this.play()
  }
}

</script>

<style scoped>
  @import "../css/animate.min.css";
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  .carousel{
    width: 500px;
    height: 300px;
    overflow: hidden;
    margin: 100px auto;
    position: relative;
  }
  .carousel ul{
    width: 100%;
    height: 100%;
  }
  .carousel ul li{
    position: absolute;
  }
  .carousel ul li a img{
    width: 500px;
    height: 300px;
  }
  .bullet{
    position: absolute;
    font-size: 0;
    bottom: 20px;
    left: 50%;
    margin-left: -42px;
  }
  .bullet span{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    margin-left: 15px;
    border-radius: 10px;
  }
  .bullet span:first-child{
    margin-left: 0;
  }
  .switch{

  }
  .switch span{
    position: absolute;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: rgba(0,0,0,.1);
    font-size: 20px;
    color: #ffffff;
    top: 50%;
    margin-top: -25px;
    cursor: pointer;
    font-family: "宋体";
  }
  .switch span:hover{

    background-color: rgba(0,0,0,.5);

  }
  .prev{
    left: 0;
  }
  .next{
    right: 0;
  }
  .active{
    background-color: red !important;
  }
</style>
