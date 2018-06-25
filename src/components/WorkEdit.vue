<template>
  <div class="col-md-9" style="padding-right: 50px">
    <h2 style="color: rgb(14, 92, 67)">上传我做的{{noteName}}</h2>
    <hr>
    <br >
    <div class="input-group search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <label style="float: left; font-size:17px; color: rgb(14, 92, 67)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作品图片：</label>
      <div id="imageDiv"><ImageUpload v-bind:uploadImgDes="uploadImg" v-bind:picCurrentUrl="picUrl" v-on:changeUrl="getPic"></ImageUpload></div>
    </div>
    <div class="input-group search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms" id="feelingDiv">
      <label style="float: left; font-size:17px; color: rgb(14, 92, 67)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的心得：</label>
      <textarea id="textPart" v-model="content"></textarea>
    </div>
    <div class="input-group search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms" id="uploadDiv">
      <input type="submit" @click="create" value="上传作品" id="uploadInput">
      <span  v-if="showState" id="state_info">{{stateInfo}}</span>
    </div>
  </div>
</template>
<script>
import api from '@/api/getData'
import ImageUpload from '@/components/ImageUpload'

export default {
  stores: {
    token: 'state.token'
  },
  props: [
    'noteID', 'noteName'
  ],
  data () {
    return {
      uploadImg: '上传我的作品图片',
      picUrl: '',
      content: '',
      showState: false,
      stateInfo: ''
    }
  },
  created () {
    window.scrollTo(0, 0)
  },
  components: {
    ImageUpload
  },
  methods: {
    getPic (url) {
      this.picUrl = url
    },
    create () {
      let information = {
        token: this.token,
        noteid: this.noteID,
        picUrl: this.picUrl,
        content: this.content
      }
      api.createWork(information).then(res => {
      }).catch(res => {
        let data = res.data
        if (data.code === '0') {
          this.$emit('createSucc', {noteID: this.noteID})
        } else if (data.code === '1') {
          this.stateInfo = '上传失败，请检查网络连接后重试'
          this.showState = true
        } else if (data.code === '2') {
          this.stateInfo = '不存在该用户'
          this.showState = true
        }
      })
    }
  }
}
</script>
<style>
  #imageDiv{
    position:absolute;
    left:130px;
    width: 350px;
    height: 250px;
  }
  #feelingDiv{
    position:relative;
    top:250px;
  }
  #textPart{
    position:absolute;
    left:130px;
    width: 350px;
    height: 250px;
    padding: 10px;
    outline: 1px solid #9d9d9d;
  }
  textarea:focus{
    background: #f7ecb5;
    border:1px solid #f7ecb5;
  }
  #uploadDiv{
    position:relative;
    top:500px;
  }
  #uploadInput{
    position:absolute;
    left:130px;
    width: 200px;
    background:rgb(14, 92, 67);
    color:#fff;
    font-size:17px;
    padding:10px;
    text-align:center;
  }
  #state_info{
    position:absolute;
    top:5px;
    left:320px;
    margin-left:20px;
    padding: 10px 30px 10px 30px;
    width:300px;
    background-color: #5e5e5e;
    color: #fff;
    border-radius:20px;
    text-align: center;
  }
</style>
