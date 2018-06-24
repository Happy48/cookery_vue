<template>
  <div  @click="showMore" class="food-grid animated wow fadeInUp indexblog" data-wow-duration="1000ms" data-wow-delay="500ms">
    <img class="indexblog-pic" :src="picture"/>
    <h3 class="indexblog-title line-limit-length">{{userName}}</h3>
    <p class="indexblog-desc line-limit-length">{{desc}}</p>
  </div>
</template>
<script>
export default {
  props: [
    'userId',
    'picture',
    'desc',
    'userName'
  ],
  computed: {
    urlTopStyle: function () {
      return 'url(' + this.url + ') top'
    },
    urlBottomStyle: function () {
      return 'url(' + this.url + ') bottom'
    }
  },
  methods: {
    userInfo (userName) {
      this.$router.push({
        name: 'PersonalInfo',
        params: {
          userName: userName,
          name: '我',
          where: 'All'
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
