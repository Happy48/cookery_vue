<template>
  <div class="container navi">
    <div class="logo animated wow pulse" data-wow-duration="1000ms" data-wow-delay="500ms">
      <h2 style="font-family: Helvetica"><a href="index.html"><img src="images/oo.png" alt="">大厨笔记</a></h2>
    </div>

    <div class="col-md-3 search">
      <form>
        <input type="text" placeholder="搜索笔记/食材" required="" >
        <input type="submit" value="" >
      </form>
    </div>

    <div id="icon_div">
      <ul class="toggle-menu">
        <li><a  href="index.html">首页</a></li>
        <li><router-link to="allBlog">笔记广场</router-link></li>
        <li><a  name="login" id="login_a">登录</a></li>
        <li><a  href="register.html">注册</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style>

</style>
