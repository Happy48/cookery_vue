<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-12" style="padding-top:15px ">创建菜谱</h4>
      </div>
      <div class="clearfix"> </div>
    </div>
    <hr />
    <div class="row search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-8 col-md-8 animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4>菜谱名称</h4>
        <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
          <input type="text" placeholder="添加菜谱名称" v-model='noteName' style="font-size:17px;" id="noteNameInput"/>
        </div>
        <br />
        <h4>菜谱封面</h4>
        <br />
        <div id="cover_upload_div"><ImageUpload v-bind:uploadImgDes="uploadCover" v-bind:picCurrentUrl="noteCover" v-on:changeUrl="getCoverUrl"></ImageUpload></div>
        <br />
        <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
          <h4>菜谱描述</h4>
          <textarea value=" " v-model="description_area" placeholder="添加菜谱描述" style="font-size:17px;">添加菜谱描述</textarea>
        </div>
        <div class="single">
          <div class="single-top">
            <div class="lone-line">
              <h4>用料</h4>
              <br>
              <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="alignment: center;font-size:17px;" id="material_table">
                <tbody id="componentBody">
                   <tr :key="material.id" v-for="(material,id) in materials">
                      <!--<td>{{id+1}}</td>-->
                      <td><input type="text" v-model="material.name" placeholder="食材：如鸡蛋"/></td>
                      <td><input type="text" v-model="material.unit" placeholder="用量：如1只"/></td>
                      <td><img src="/static/images/close.png" draggable="false" @click="remove(id)"></td>
                    </tr>
                </tbody>
              </table>
              <div class="clearfix wow fadeInLeft animated" data-wow-delay=".5s">
                <button @click="addMaterial" class="addButton">追加一行用料</button>
              </div>
              <br>
              <h4>做法</h4>
              <br>
              <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="alignment: center;font-size:17px;"  id="practice_table">
                <tbody id="stepBody">
                <tr :key="step.id" v-for="(step,id) in steps">
                  <td><h4 style="padding-top:0">{{id+1}}</h4></td>
                  <td>
                    <textarea v-model="step.information" placeholder="添加菜谱步骤" onblur="if (this.value == '') {this.value = '';}"></textarea>
                  </td>
                  <td>
                    <div id="step_img_div"><ImageUpload v-bind:stepIndex="step.id" v-bind:uploadImgDes="uploadStepImg" v-on:changeUrl="getStepPicUrl" v-bind:picCurrentUrl='step.img' ></ImageUpload></div>
                  </td>
                  <td>
                    <img src="/static/images/close.png" draggable="false" style="padding-top:70%" @click="deleteStep(id)">
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="clearfix wow fadeInLeft animated" data-wow-delay=".5s">
                <button @click="addStep" class="addButton">追加一行步骤</button>
              </div>
              <br>
              <BlogTag v-on:blogTagSay="getCheckedTagNames"></BlogTag>
              <br>
            </div>
          </div>
          <div class="leave">
            <h4>小贴士</h4>
            <form>
              <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
                <textarea value=" " v-model="tip_area" onfocus="this.value='';" placeholder="添加小贴士" style="font-size:17px;" onblur="if (this.value == '') {this.value = '添加小贴士';}">添加小贴士</textarea>
                <label class="hvr-rectangle-out">
                  <input type="submit" value="上传" @click="save_new">
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3"></div>
    </div>

  </div>
</template>
<script>
import BlogTag from '@/components/BlogTag'
import ImageUpload from '@/components/ImageUpload'
import api from '@/api/getData'
export default {
  components: {BlogTag, ImageUpload},
  stores: {
    token: 'state.token'
  },
  data () {
    return {
      noteName: '',
      noteCover: '',
      description_area: '',
      material: {'name': '', 'unit': ''},
      materials: [
        {'name': '', 'unit': ''},
        {'name': '', 'unit': ''}
      ],
      step: {'id': '', 'img': '', 'information': ''},
      steps: [
        {'id': '1', 'img': '', 'information': ''},
        {'id': '2', 'img': '', 'information': ''},
        {'id': '3', 'img': '', 'information': ''}
      ],
      practice: '',
      tip_area: '',
      subtag: '',
      uploadStepImg: '点击上传步骤图',
      uploadCover: '点击上传菜谱封面'
    }
  },
  methods: {
    getCheckedTagNames: function (msg) {
      this.subtag = msg
    },
    remove: function (id) {
      this.materials.splice(id, 1)
    },
    addMaterial: function () {
      let newMaterial = {'name': '', 'unit': ''}
      this.materials.push(newMaterial)
    },
    deleteStep: function (id) {
      this.steps.splice(id, 1)
    },
    addStep: function () {
      let newStep = {'id': this.steps.length + 1, 'img': '', 'information': ''}
      this.steps.push(newStep)
    },
    getCoverUrl: function (coverUrl) {
      this.noteCover = coverUrl
    },
    getStepPicUrl: function (url, index) {
      this.$set(this.steps[index - 1], 'img', url)
    },
    save_new () {
      let self = this
      for (let i in this.steps) {
        let index = parseInt(i) + 1
        this.$set(this.steps[i], 'id', index)
      }
      let information = {
        token: this.token,
        noteName: this.noteName,
        noteCover: this.noteCover,
        description: this.description_area,
        material: JSON.stringify(this.materials),
        practice: JSON.stringify(this.steps),
        tip: this.tip_area,
        subtag: this.subtag.join(',')
      }
      api.createNote(information).then(res => {
      }).catch(res => {
        let data = res.data
        if (data.code === '0') {
          alert('创建成功')
          self.reload()
        } else if (data.code === '1') {
          alert('子标签不在定义范围之内')
        } else if (data.code === '2') {
          alert('不存在该用户')
        }
      })
    }
  }
}

</script>
<style>
  #cover_upload_div{
    position:relative;
    width:100%;
    height:300px;
  }
  #step_img_div{
    width:150px;
    height:120px;
    font-size:13px;
  }
  #noteNameInput:focus{
    background: #f7ecb5;
    border:1px solid #f7ecb5;
  }
  #material_table {
    width: 100%;
    border: 1px solid #9d9d9d;
    border-collapse: collapse;
  }
  #material_table th, #material_table td{
    border:1px solid #9d9d9d;
  }
  #material_table input{
    border: 0;
    outline:none;
  }
  #practice_table{
    width:100%;
  }
  #practice_table textarea{
    width:200px;
    height:120px;
    outline:none;
  }
  textarea:focus{
    background: #f7ecb5;
    border:1px solid #f7ecb5;
  }
  input:focus{
    background: #f7ecb5;
    border:1px solid #f7ecb5;
  }

  .addButton{
    background:#3c763d;
    color:#fff;
    outline:none;
    border:none;
  }
  .addButton:active{
    background:#145b43;
  }
</style>
