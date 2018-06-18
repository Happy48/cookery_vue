<template>
  <div>
    <sub-title></sub-title>
    <!--content-->
    <div class="content">
      <div class="events">
        <TagList></TagList>
        <div class="clearfix"> </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import TagList from '@/components/TagList'

export default {
  // name: 'AllTag',
  data () {
    return {
      where: '我',
      name: '我'
    }
  },
  components: {
    SubTitle,
    Footer,
    TagList
  }
}
</script>

<style scoped>

</style>
