<template>
  <div id="cover_input_div">
    <label>
      <input type="file" accept="image/jpeg,image/x-png,image/gif" id="file_input" value="" @change="changeUrl"/>
      <img :src="this.picCurrentUrl.length==0 && this.myPicCurrentUrl.length==0?dataUrl:this.myPicCurrentUrl" id="img_preview" v-bind:style="{width: imgWidth, height: imgHeight}"/>
      <label for="file_input" id="input_label"></label>
      <span class="glyphicon glyphicon-paperclip" style="font-size:20px"><br /><label style="font-size:15px">{{uploadImgDes}}</label></span>
    </label>
  </div>
</template>

<script>
import OSS from 'ali-oss'
export default {
  props:
    ['stepIndex', 'uploadImgDes', 'picCurrentUrl'],
  data () {
    return {
      dataUrl: '/static/images/transparentBg.png',
      imgWidth: '100%',
      imgHeight: '100%',
      myPicCurrentUrl: this.picCurrentUrl,
      // oss
      client: ''
    }
  },
  watch: {
    picCurrentUrl (val) {
      this.myPicCurrentUrl = val
    }
  },
  created () {
    this.client = new OSS.Wrapper({
      region: 'oss-cn-beijing',
      secure: true,
      accessKeyId: 'LTAIJShPZXupEPWf',
      accessKeySecret: 'OZtw1SkLDnJX7HJqFvPUuFN1Zqy86C',
      bucket: 'cookery'
    })
  },
  methods: {
    // 预览图片
    imgPreview (file) {
      let self = this
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return

      if (/^image/.test(file.type)) {
        // 创建一个reader
        var reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = function () {
          self.myPicCurrentUrl = this.result
        }
      }
    },
    changeUrl (event) {
      let _this = this
      let aliUrl = ''
      if (event.target.files.length > 0) {
        _this.imgPreview(event.target.files[0])
        var file = event.target.files[0]
        var type = file.name.split('.')[1]
        var storeAs = this.getUuid() + '.' + type
        this.client.multipartUpload(storeAs, file).then(function (result) {
          aliUrl = result.res.requestUrls[0].split('?')[0]
          if (_this.uploadImgDes === '点击上传步骤图') {
            _this.$emit('changeUrl', aliUrl, _this.stepIndex)
          } else {
            _this.$emit('changeUrl', aliUrl)
          }
          _this.myPicCurrentUrl = aliUrl
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    getUuid () {
      var len = 32
      var radix = 16
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
      var uuid = []
      var i
      radix = radix || chars.length
      if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
      } else {
        var r
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
        uuid[14] = '4'
        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | Math.random() * 16
            uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
          }
        }
      }
      return uuid.join('')
    }
  }

}

</script>
<style scoped>
  #cover_input_div {
    position: relative;
    width:100%;
    min-height: 100%;
    padding-bottom: 20px;
    -webkit-animation: fadeup .2s .2s ease both;
    animation: fadeup .2s .2s ease both;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
    text-align: center;
    background: #efeeee;
    box-shadow: 1px 1px 5px rgba(0,0,0,.1), 0 0 10px rgba(0,0,0,.12);
    border-radius: 5px;
    /*内容居中展示*/
    display:flex;
    justify-content:center;
    align-items:center;
    color: #9d9d9d;
  }
  #cover_input_div input {
    font-size: 0;
    position: absolute;
    left: -9999px;
  }
  #cover_input_div input::-webkit-file-upload-button {
    background: #efeeee;
    color: #333;
    border: 0;
    padding: 40px 100px;
    border-radius: 2px;
    font-size: 15px;
    box-shadow: 1px 1px 5px rgba(0,0,0,.1), 0 0 10px rgba(0,0,0,.12);
    width:100%;
    height: 100%;
  }
  #input_label {
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    z-index: 10;
    left:40%;
    height:50%;
  }
  #img_preview{
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    z-index: 10;
    left:0;
    border:none;
  }
</style>
