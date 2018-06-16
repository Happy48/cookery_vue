<template>
  <div>
    <SubTitle></SubTitle>
    <!--content-->
    <div class="content">
      <div class="events">
        <LeftPart :where="where" :name="name"></LeftPart>
        <focus-list :name="name"></focus-list>
      </div>
    </div>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import FocusList from '@/components/FocusList'
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
    FocusList,
    LeftPart
  }
}
</script>
<style>
</style>
