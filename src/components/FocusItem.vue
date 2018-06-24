<template>
  <div class="col-md-4 menu-bottom1" style="margin-top: 30px;padding: 10px 20px">
    <div class="btm-right" style=";box-shadow: 1px 1px 10px #000">
      <a @click="showMore">
        <img :src="url" alt="" class="img-responsive">
        <div class="captn" style="bottom: -80%">
          <h4 style="font-size: 1.4em;margin-top: 0.2em">{{name}}</h4>
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
