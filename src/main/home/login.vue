<template>
  <div class="content">
    <div class="top_img">
      <img alt="" src="../../img/login_img.jpg">
    </div>
    <h3 class="head">用户登录</h3>
    <form class="form" id="form" action="" method="post">
      <input type="text" v-model="name" placeholder="用户名/手机号码" tips="请输入用户名"><br>
      <input type="password" v-model="password" placeholder="密码" tips="请输入正确的密码"><br>
      <input id="login_btn" type="button" value="登录" v-on:click="click">
<!--      <button id="login_btn">登录</button>-->
      <div class="forget_pass"><a href="javascript:">忘记密码</a></div>
    </form>
    <a class="wechat" href="javascript:">微信登录</a>
  </div>
</template>

<script>
  import login from "../../js/login"
  export default {
    name: "login",
    el:"#form",
    data:{
      name:"",
      password:"",
    },
    methods:{
      click:function (){
        var obj={
          name:this.name,
          password:this.password
        };

      }
    }
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
