<template>
    <div>
      <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
          <div style="padding-top:0; text-align:center;">
            <a href="#">
              <img :src="peopleUrl" alt="" style="width:120px; height:120px;border-radius:60%;">
            </a>
          </div>
          <div style="text-align:center;">
            <h4>{{name}}</h4>
            <li><i class="glyphicon glyphicon-share"> </i>关注</li>
          </div>
      </div>
    </div>
</template>

<script>
import api from '@/api/getData'
export default {
  props: ['name'],
  data () {
    return {
      peopleUrl: '',
      focus: 1
    }
  },
  methods: {
    getPeopleInfo () {
      api.getUserInfo({name: this.name}).then().catch(res => {
        let peopleInfo = res.data
        this.peopleUrl = peopleInfo['icon']
      })
    }
  }
}
</script>

<style scoped>

</style>
