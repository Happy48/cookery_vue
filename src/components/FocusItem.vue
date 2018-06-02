<template>
  <div class="col-md-4 menu-bottom1">
    <div class="btm-right">
      <a href="events.html">
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
  ]
}
</script>
<style>
</style>
