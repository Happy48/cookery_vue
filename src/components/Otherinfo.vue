<template>
    <div>
      <div style="margin-left: -70px" class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
          <div style="text-align:center;">
            <div style="text-align: center"><img :src="peopleUrl" alt="" style="width:100px; height:100px;border-radius:60%;"></div>
            <p style="padding-top: 20px;font-size:18px">{{name}}</p>
            <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s" style="">
              <label class="hvr-rectangle-out">
                <input @click="addFocus" type="submit" v-bind:value="likeText" v-bind:style="{background: likeColor}">
              </label>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import api from '@/api/getData'

export default {
  stores: {
    token: 'state.token'
  },
  props: ['name'],
  data () {
    return {
      peopleUrl: '',
      focus: 1,
      likeColor: '#08523a',
      likeText: '关注'
    }
  },
  created () {
    this.getPeopleInfo()
  },
  methods: {
    getPeopleInfo () {
      api.getUserInfo({name: this.name}).then().catch(res => {
        let peopleInfo = res.data
        console.log(peopleInfo)
        this.peopleUrl = peopleInfo['icon']
      })
      let info = {
        token: this.token,
        name: this.name
      }
      api.isFocus(info).then().catch(res => {
        let isFocusCode = res.data.code
        if (isFocusCode === '0') {
          this.likeText = '已关注'
          this.likeColor = 'grey'
        } else if (isFocusCode === '1') {
          this.likeText = '关注'
          this.likeColor = '#08523a'
        } else if (isFocusCode === '2') {
          alert('不存在该用户')
        }
      })
    },
    addFocus () {
      this.likeText = '已关注'
      this.likeColor = 'grey'
    }
  }
}
</script>

<style scoped>

</style>
