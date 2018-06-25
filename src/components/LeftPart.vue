<template>
  <div>
    <div class="col-md-3 categories-grid" v-if='isAll' style="padding-left: 50px">
      <blog-square-label :currentLabel="currentLabel" v-on:getBlogListByClass="getBlogListByClass"></blog-square-label>
      <OtherLikeLabel v-on:recommend="recommend"  :list="otherLikeData" :title="likeLabelTitle"></OtherLikeLabel>
    </div>
    <div class="col-md-3 categories-grid" v-if="isMe" style="padding-left: 50px">
      <NoteLabel :list="noteLabelData"></NoteLabel>
      <CollectLabel :list="collectData"></CollectLabel>
      <AttentionLabel :list="attentionData" :name="name"></AttentionLabel>
      <OtherLikeLabel v-on:recommend="recommend" :list="otherLikeData" :title="likeLabelTitle"></OtherLikeLabel>
    </div>
    <div class="col-md-3 categories-grid" v-if="isOther" style="padding-left: 50px">
      <NoteLabel :list="noteLabelData"></NoteLabel>
      <AttentionLabel :list="attentionData" :name="name"></AttentionLabel>
    </div>
  </div>
</template>

<script>
import NoteLabel from '@/components/NoteLabel'
import CollectLabel from '@/components/CollectLabel'
import AttentionLabel from '@/components/AttentionLabel'
import OtherLikeLabel from '@/components/OtherLikeLabel'
import BlogSquareLabel from '@/components/BlogSquareLabel'
import api from '@/api/getData'
export default {
  stores: {
    token: 'state.token'
  },
  props: [
    'where',
    'name',
    'currentLabel'
  ],
  data () {
    return {
      noteLabelData: [
        {
          name: '早饭',
          id: 1
        },
        {
          name: '中饭',
          id: 2
        },
        {
          name: '晚餐',
          id: 3
        },
        {
          name: '甜点',
          id: 4
        }
      ],
      otherLikeData: [
        {
          'url': '/static/images/bo.jpg',
          'title': 'Consectetuer adipiscing',
          'desc': 'Lorem ipsum dolor sit amet'
        }
      ],
      likeLabelTitle: '你可能喜欢',
      collectData: [
        '早饭',
        '午饭',
        '晚饭',
        '甜品'
      ],
      attentionData: [
        '朋友',
        '同事',
        '更多'
      ]
    }
  },
  created () {
    let data = {}
    if (this.where === '我') {
      this.getMyNoteLabel()
      this.recommend(data)
    } else if (this.where === 'All') {
      this.recommend(data)
    }
  },
  methods: {
    recommend (data) {
      let information = {
        number: 3
      }
      api.getGuessLike(information).then().catch(res => {
        let notes = res.data
        this.otherLikeData = notes
      })
    },
    getMyNoteLabel () {
      let info = {
        token: this.token,
        name: ''
      }
      api.getUserTagList(info).then().catch(res => {
        this.noteLabelData = res.data
      })
    },
    getOtherNoteLabel () {
      let info = {
        token: '',
        name: this.name
      }
      api.getUserTagList(info).then().catch(res => {
        this.noteLabelData = res.data
      })
    },
    getBlogListByClass (param) {
      this.$emit('getBlogListByClass', param)
    }
  },
  computed: {
    isAll: function () {
      return (this.where === 'All')
    },
    isMe: function () {
      return (this.where === '我')
    },
    isOther: function () {
      return (this.where !== '我' && this.where !== 'All')
    }
  },
  components: {
    NoteLabel,
    CollectLabel,
    OtherLikeLabel,
    AttentionLabel,
    BlogSquareLabel
  }
}
</script>

<style scoped>

</style>
