<template>
  <div>
    <sub-title></sub-title>
    <div class="content">
      <div class="events">
        <left-part :where="name" :name="name"></left-part>
        <PersonInfoForm :name="name"></PersonInfoForm>
        <div class="clearfix"> </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import LeftPart from '@/components/LeftPart'
import PersonInfoForm from '@/components/PersonInfoForm'
import api from '@/api/getData'

export default {
  data () {
    return {
      name: '我'
    }
  },
  components: {
    SubTitle,
    Footer,
    LeftPart,
    PersonInfoForm
  },
  created () {
    this.recommend()
  },
  methods: {
    recommend () {
      let information = {
        number: 3
      }
      api.getGuessLike(information).then().catch(res => {
        let notes = res.data
        this.otherLikeData = notes
      })
    }
  }
}
</script>
<style>
</style>
