<template>
  <div class="header">
    <div class="container">
      <div class="logo animated wow pulse" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h2 style="font-family: Helvetica"><a href="index.html"><img src="/static/images/oo.png" alt="">大厨笔记</a></h2>
      </div>
      <div class="clearfix"></div>
    </div>
    <!-- start search-->
    <div class="banner">
      <div class="form row animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
        <br>
        <h2 style="color: white">登录</h2>
        <div class="form-horizontal col-md-offset-3" id="login_form">

          <div class="col-md-9">
            <div class="form-group">
              <i class="fa fa-user fa-lg"></i>
              <input v-model="email" class="form-control required" type="text" placeholder="邮箱" id="email" name="email" autofocus="autofocus" maxlength="20" required/>
            </div>
            <div class="form-group">
              <i class="fa fa-lock fa-lg"></i>
              <input v-model="password" class="form-control required" type="password" placeholder="密码" id="password" name="password" maxlength="20" required/>
            </div>
            <a class='col-md-offset-7' href="register.html">马上注册！</a>
            <div class="leave">
              <form>
                <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
                  <label class="hvr-rectangle-out">
                    <input type="submit" @click="login" value="登录">
                  </label>
                </div>
              </form>
            </div>
          </div>
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
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      let information = {
        email: this.email,
        pass: this.password
      }
      api.login(information).then(res => {
      }).catch(res => {
        let data = res.data
        if (data.code === '0') {
          console.log(data.message)
          this.token = data.message
          this.$router.push('/')
        } else if (data.code === '1') {
          // TODO
        }else if (data.code === '2') {
          // TODO
        }else if (data.code === '3') {
          // TODO
        }
      })
    }
  }
}
</script>
<style scoped>

  .form{
    background: rgba(255,255,255,0.4);
    width:400px;
    height: 300px;
    margin:120px auto;
  }
  /*阴影*/
  .fa{
    display: inline-block;
    top: 27px;
    right: 6px;
    position: relative;
    color: #ccc;
  }
  input[type="text"],input[type="password"]{
    padding-left:26px;
  }

</style>
