<template>
  <nav>
    <ul class="my_pagination">
      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)" style="width:60px"> 首页 </a></li>
      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"  style="width:80px"  > 上一页 </a></li>
      <li :key="p.index" v-for="p in grouplist" :class="{'active': current == p.val}">
        <a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"  style="width:80px" > 下一页 </a></li>
      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)" style="width:60px"> 尾页 </a></li>
    </ul>
  </nav>
</template>

<script type="es6">
export default{
  data () {
    return {
      current: this.currentPage
    }
  },
  props: {
    total: {// 数据总条数
      // type: Number,
      default: 0
    },
    display: {// 每页显示条数
      type: Number,
      default: 30
    },
    currentPage: {// 当前页码
      type: Number,
      default: 1
    },
    pagegroup: {// 分页条数
      type: Number,
      default: 5,
      coerce: function (v) {
        v = v > 0 ? v : 5
        return v % 2 === 1 ? v : v + 1
      }
    }
  },
  computed: {
    page: function () { // 总页数
      return Math.ceil(this.total * 1.0 / this.display)
    },
    grouplist: function () { // 获取分页页码
      var len = this.page
      var temp = []
      var list = []
      var count = Math.floor(this.pagegroup / 2)
      var center = this.current
      if (len <= this.pagegroup) {
        while (len--) {
          temp.push({text: this.page - len, val: this.page - len})
        }
        return temp
      }
      while (len--) {
        temp.push(this.page - len)
      }
      var idx = temp.indexOf(center);
      (idx < count) && (center = center + count - idx);
      (this.current > this.page - count) && (center = this.page - count)
      temp = temp.splice(center - count - 1, this.pagegroup)
      do {
        var t = temp.shift()
        list.push({
          text: t,
          val: t
        })
      } while (temp.length)
      if (this.page > this.pagegroup) {
        (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
        (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1})
      }
      return list
    }
  },
  methods: {
    setCurrent: function (idx) {
      if (this.current !== idx && idx > 0 && idx < this.page + 1) {
        this.current = idx
        this.$emit('pagechange', this.current)
      }
    },
    setPage: function (idx) {
      if (this.current !== idx && idx > 0 && idx < this.page + 1) {
        this.current = idx
      }
    }
  }
}
</script>

<style lang="less">
  .my_pagination {
    overflow: hidden;
    display: table;
    margin: 100px auto 0px auto;
    /*width: 100%;*/
    height: 50px;

    li {
      float: left;
      height: 30px;
      border-radius: 5px;
      margin: 3px;
      list-style-type:none;

      & :hover {
        background: #005238;

        color: #fff;
      }
      a {
        display: block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 1.2em;
        border-radius: 5px;
        text-decoration: none;
        color: black;
      }

    }
    .active {
      background: #005238;

      a {
        color: #fff;
      }

    }
  }

</style>
