<template>
  <div class="col-md-4 food-grid animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
    <div class=" hover-fold">
      <h4>{{title}}</h4>
      <div class="top">
        <div class="front face" v-bind:style="{background:urlTopStyle}"></div>
        <div class="back face">
          <p>{{description}}</p>
        </div>
      </div>
      <div class="bottom" v-bind:style="{background:urlBottomStyle}"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'title',
    'url',
    'description'
  ],
  computed: {
    urlTopStyle: function () {
      return 'url(' + this.url + ') top'
    },
    urlBottomStyle: function () {
      return 'url(' + this.url + ') bottom'
    }
  }
}
</script>
<style scoped>
</style>
