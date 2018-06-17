<template>
  <div class="col-md-4 menu-bottom1" style="margin-top: 30px">
    <div class="btm-right">
      <a @click="showMore">
        <img :src="url" alt="" class="img-responsive">
        <div class="captn">
          <h4>{{name}}</h4>
          <p></p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import store from '@/store/todo_list.js'

export default {
  props: [
    'url',
    'name'
  ],
  methods: {
    showMore () {
      store.save(this.name)
      this.$router.push({
        name: 'hisBlogs',
        params: {
          name: this.name
        }
      })
    }
  }
}
</script>
<style>
</style>
