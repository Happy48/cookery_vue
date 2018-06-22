<template>
  <div class="login-container">
    <Title></Title>
    <!-- start search-->
    <div class="">
      <div class="form row animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
        <br>
        <h2 style="color: white;text-align: center">登录</h2>
        <div class="form-horizontal col-md-offset-3" id="login_form">

          <div class="col-md-9 login-input">
            <div class="form-group">
              <i class="fa fa-user fa-lg"></i>
              <input v-model="email" class="form-control required" type="text" placeholder="邮箱" id="email" name="email" autofocus="autofocus" maxlength="20" required/>
            </div>
            <div class="form-group">
              <i class="fa fa-lock fa-lg"></i>
              <input v-model="password" class="form-control required" type="password" placeholder="密码" id="password" name="password" maxlength="20" required/>
            </div>
            <a class="form-group" style="float: right"><router-link to="register"><b>还没账号？马上注册</b></router-link></a>
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
import Title from '@/components/Title'

export default {
  stores: {
    token: 'state.token'
  },
  components: {
    Title
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
        } else if (data.code === '2') {
          // TODO
        } else if (data.code === '3') {
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
    height: 320px;
    margin:190px auto;
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
