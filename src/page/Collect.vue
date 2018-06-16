<template>
  <div>
    <SubTitle></SubTitle>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
        <collect-list :name="name"></collect-list>

      </div>
    </div>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import CollectList from '@/components/CollectList'
import LeftPart from '@/components/LeftPart'
export default {
  data () {
    return {
      where: '我',
      name: '我'
    }
  },
  components: {
    SubTitle,
    Footer,
    CollectList,
    LeftPart
  }
}
</script>
<style>
</style>
