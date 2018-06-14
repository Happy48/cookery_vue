<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-12" style="padding-top:15px ">我的资料</h4>
      </div>
      <div class="clearfix"> </div>
    </div>
    <hr />
    <div class="row search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-5 col-md-5 animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户名:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" class="form-control" v-model="userName"/>
        </div>
        <br />
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="password" class="form-control" v-model="userPwd"/>
        </div>
        <br />
        <div class="form-group form-inline">
          <label style="float: left;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <!--<input type="text" disabled="true" id="sex" />-->
          <!--<select  class="form-control" name="sex" id="sex" style="width: auto;">-->
          <!--<option value="男" >男</option>-->
          <!--<option value="女" >女</option>-->
          <!--</select>-->
          <label  class="lh16"><input type="radio" hidefocus="true" value="0"  checked="checked" name="sex" v-model="sex"> &nbsp;&nbsp;女</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label  class="lh16"><input type="radio" hidefocus="true" value="1"  name="sex" v-model="sex"> &nbsp;&nbsp;男</label>
        </div>

        <div class="form-group form-inline">
          <label style="float: left;padding-top:25px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <!--<input type="date" placeholder="1980-01-01" disabled="true" id="birthday"/>-->
          <div class="input-group date" id='data1'>
            <input type="text" class="form-control" v-model="birthday">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-calendar"></i>
            </span>
          </div>
        </div>
        <br />
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" class="form-control" v-model="email"/>
        </div>
        <br />
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" class="form-control" v-model="phoneNumber"/>
        </div>
        <br />
        <br />
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地区:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <!--<input type="text"  disabled="true" id="location"/>-->
          <select  class="form-control" name="location" id="location" style="width: auto;" v-model="address">
            <option value="选择省份">选择省份</option>
            <option value="北京">北京</option>
            <option value="天津">天津</option>
            <option value="河北">河北</option>
            <option value="山西">山西</option>
            <option value="内蒙古">内蒙古</option>
            <option value="辽宁">辽宁</option>
            <option value="吉林">吉林</option>
            <option value="黑龙江">黑龙江</option>
            <option value="上海">上海</option>
            <option value="江苏">江苏</option>
            <option value="浙江">浙江</option>
            <option value="安徽">安徽</option>
            <option value="福建">福建</option>
            <option value="江西">江西</option>
            <option value="山东">山东</option>
            <option value="河南">河南</option>
            <option value="湖北">湖北</option>
            <option value="湖南">湖南</option>
            <option value="广东">广东</option>
            <option value="海南">海南</option>
            <option value="广西">广西</option>
            <option value="甘肃">甘肃</option>
            <option value="陕西">陕西</option>
            <option value="新疆">新疆</option>
            <option value="青海">青海</option>
            <option value="宁夏">宁夏</option>
            <option value="重庆">重庆</option>
            <option value="四川">四川</option>
            <option value="贵州">贵州</option>
            <option value="云南">云南</option>
            <option value="西藏">西藏</option>
            <option value="台湾">台湾</option>
            <option value="澳门">澳门</option>
            <option value="香港">香港</option>
            <option value="其他">其他</option>
          </select>
        </div>
        <br />
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="input-group search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
          <label style="float: left;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;头像:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <img class="fl avator-img" id="js-portrait" :src="picUrl" data-portrait="58492fe600012e8e01800180" width="180" height="180">
        </div>
      </div>
    </div>

    <div class="row search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-7 col-md-7 search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <div class="leave form-group form-inline">
          <label>&nbsp;&nbsp;&nbsp;个人简介:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
            <textarea onfocus="this.value='';" onblur="if (this.value == '') {this.value = '介绍一下自己吧';}" v-model="introduction">介绍一下自己吧</textarea>
          </div>
          <form>
            <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
              <label class="hvr-rectangle-out">
                <input type="submit" value="编辑">
              </label>
            </div>
          </form>
          <form>
            <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
              <label class="hvr-rectangle-out">
                <input type="submit" @click="save_info" value="保存">
              </label>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-4 col-md-4"></div>
    </div>
  </div>
</template>
<script>
import api from '@/api/getData'

export default {
  stores: {
    token: 'state.token'
  },
  props: [
    'name'
  ],
  data () {
    return {
      userName: '',
      address: '',
      sex: '',
      birthday: '',
      introduction: '',
      phoneNumber: '',
      userPwd: '',
      email: '',
      picUrl: ''
    }
  },
  created () {
      if (this.name === '我') {
        this.getMyInfo()
      }
    },
  methods: {
    save_info () {
      let information = {
        token: this.token,
        userName: this.userName,
        address: this.address,
        sex: this.sex,
        birthday: this.birthday,
        introduction: this.introduction,
        phoneNumber: this.phoneNumber,
        userPwd: this.userPwd,
        email: this.email
      }
      api.changeInfo(information).then(res => {
      }).catch(res => {
        let data = res.data
        if (data.code === '0') {
          alert('修改成功')
        } else if (data.code === '1') {
          alert('修改的用户名已存在')
        } else if (data.code === '2') {
          alert('修改的邮箱已存在')
        } else if (data.code === '3') {
          alert('不存在该用户')
        }
      })
    },
    getMyInfo () {
      let list = {name: '梅子厨艺'}
      api.getUserInfo(list).then(res => {}).catch(res => {
        let user = res.data
        this.userName = user.userName
        this.introduction = user.introduction
        this.picUrl = user.icon
      })
    }
  }
}
</script>
<style scoped>
  #data1{
    width:175px;
  }
</style>
