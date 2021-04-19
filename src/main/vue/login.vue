<template>
  <div class="content">
    <div class="top_img">
      <img alt="" src="../../img/login_img.jpg">
    </div>
    <h3 class="head">用户登录</h3>
    <form class="form" action="" method="post">
      <input type="text" name="username" placeholder="用户名/手机号码"><br>
      <input type="password" name="password" placeholder="密码"><br>
      <input id="login_btn" type="submit" value="登录">
      <div class="forget_pass"><a href="">忘记密码</a></div>
    </form>
    <!--登录form表单结束  -->
    <!--微信登录文字加图标开始  -->
    <a class="wechat" href="">微信登录</a>
    <!--微信登录文字加图标结束  -->
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>
  .content{
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
  }
  .top_img{
    width: 100%;
    height: 14.5rem;
    background-color: red;
    position: relative;
  }
  .top_img img {
    width: 120%;
    height: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  /*-----*/
  .head{
    margin-top: 2.2em;
  }
  /*-----*/
  .form input{
    display: block;
    width: 76%;
    line-height: 2.8;
    padding: 0 2%;
    margin: 0 auto;
    border:1px solid #bdbdbd;
    border-radius: 0.2rem;
  }
  .form input[type=submit]{
    width: 82%;
    color: #FFFFFF;
    background-color: #0e4643;
    outline: none;
    border: 0;
  }
  .forget_pass{
    width: 80%;
    margin: 3% auto;
    font-size: 12px;
    text-align: right;
  }
  /*-----*/
  .wechat{
    display: block;
    width: 3rem;
    padding-top: 3.2rem;
    margin: 2.6rem auto;
    text-decoration: none;
    font-size: 12px;
    color: #666666;
    text-align: center;
    background: url("../../icon/i_wechat.png") no-repeat center top;
    background-size: 100% auto;
  }
</style>
