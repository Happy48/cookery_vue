<template>

  <form enctype="multipart/form-data">
    <div class="imageFileInput">
      <input class="fileInput" type="file" @change="getFile($event)">
    </div>
    <button @click="submitForm($event)" style="margin-top: 200px" >提交</button>
  </form>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      file: ''
    }
  },
  methods: {
    getFile (event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    async submitForm (event) {
      event.preventDefault()
      let formData = new FormData()
      formData.append('file', this.file)
      console.log(this.file)
      $.ajax({
        url: 'http://localhost:10086/test',
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        contentType: false
      }).done(function (res) {
      }).fail(function (res) {
      })
    }
  }
}
</script>
<style>
  /*定义图像以及大小*/
  .imageFileInput{
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: red; /*这里可以换成图片路径（background-image：../img/....）注意图片路径*/
  }

  /*定义上传*/
  .fileInput{
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
  }
</style>
