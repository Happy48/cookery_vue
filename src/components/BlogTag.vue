<template>
  <div class="clearfix wow fadeInLeft animated" data-wow-delay=".5s">
    <h4>标签</h4>
    <ul class="popular">
      <li :key="item.id" v-for="(item) in list">
        <input type="checkbox" name="标签" :value="item.name" v-model="checkTags" @change="up">&nbsp;{{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/getData'
export default {
  props: ['subtags'],
  data () {
    return {
      list: [
        {
          name: '',
          id: ''
        }
      ],
      checkTags: this.subtags
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      api.getList().then().catch(res => {
        this.list = res.data
        console.log(this.list)
      })
    },
    up () {
      this.$emit('blogTagSay', this.checkTags)
    },
    isChecked (name) {
      if (this.checkTags.indexOf(name) > 0) {
        return true
      } else {
        return false
      }
    }
  }
}

</script>

<style scoped>
ul{overflow:hidden;width:100%;}
ul li{width:25%;float:left;font-size:16px;}
</style>
