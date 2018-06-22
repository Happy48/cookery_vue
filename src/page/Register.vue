<template>
  <div class="login-container">
    <Title></Title>
    <!-- start search-->
    <div class="">
      <div class="form row animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
        <br>
        <h2 style="color: white;text-align: center">注册</h2>
        <div class="form-horizontal col-md-offset-3" id="login_form">

          <div class="col-md-9  login-input">
            <div class="form-group">
              <i class="fa fa-envelope-open"></i>
              <input v-model="email" class="form-control required" type="text" placeholder="邮箱" id="email" name="email" maxlength="20"/>
            </div>
            <div class="form-group">
              <i class="fa fa-user fa-lg"></i>
              <input v-model="name" class="form-control required" type="text" placeholder="用户名" id="username" name="username" autofocus="autofocus" maxlength="20"/>
            </div>
            <div class="form-group">
              <i class="fa fa-lock fa-lg"></i>
              <input v-model="password" class="form-control required" type="password" placeholder="密码" id="password" name="password" maxlength="20"/>
            </div>
            <a class="form-group" style="float: right"><router-link to="login"><b>已有账号？去登录</b></router-link></a>
            <div class="leave">
              <form>
                <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
                  <label class="hvr-rectangle-out">
                    <input type="submit" @click="register" value="注册">
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
import Title from '@/components/Title'
export default {
  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  components: {
    Title
  },
  methods: {
    register () {
      let information = {
        email: this.email,
        pass: this.password,
        name: this.name
      }
      api.register(information).then(res => {
      }).catch(res => {
        let data = res.data
        if (data.code === '0') {
          console.log('注册成功')
          this.$router.push('/login')
        } else if (data.code === '1') {
          // TODO
        } else if (data.code === '2') {
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
    height: 400px;
    margin:170px auto;
    padding: 10px;
  }
  /*阴影*/
  .fa{
    display: inline-block;
    top: 27px;
    right: -7px;
    position: relative;
    color: #ccc;
  }
  input[type="text"],input[type="password"]{
    padding-left:26px;
  }
  .single-grid input[type="submit"]{
    margin:0 0 0 40px;
  }
  .login-input{
    margin-left: -10px;
  }

</style>
