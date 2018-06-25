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
      content: ''
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
          alert('上传成功')
          this.$router.push({
            name: 'blogDetail',
            params: {
              noteID: this.noteID
            }
          })
        } else if (data.code === '1') {
          alert('上传失败')
        } else if (data.code === '2') {
          alert('不存在该用户')
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
</style>
