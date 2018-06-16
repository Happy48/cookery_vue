<template>
  <div class="col-md-4 menu-bottom1">
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
export default {
  props: [
    'url',
    'name'
  ],
  methods: {
    showMore () {
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
