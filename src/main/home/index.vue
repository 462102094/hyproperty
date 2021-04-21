<template>
  <div class="content" id="content">
    <img class="bg" src="../../img/index.jpg" alt="">
<!--    top-->
    <div class="top" id="top">
      <span class="address" href="javascript:">{{address}}</span>
      <input class="search" type="search" placeholder="搜索">
      <img class="message" src="../../icon/i13.png">
    </div>
<!--    banner-->
    <div class="banner">
      <img src="../../img/a1.png" alt="">
    </div>
<!--    特色服务-->
    <div class="service">
      <h3>特色服务</h3>
      <div class="service_par" id="service_par">
<!--        <img class="service_item" :src="serviceSrc" alt="">-->
        <img class="service_item" src="../../img/a2.jpg" alt="">
        <img class="service_item" src="../../img/a3.jpg" alt="">
        <img class="service_item" src="../../img/a4.jpg" alt="">
      </div>
    </div>
<!--    物业服务-->
    <div class="property">
      <div class="head">
        <h3>物业服务</h3>
        <span>更多</span>
      </div>
      <div class="property_icon">
        <a class="propertya_a" href="javascript:">客服中心</a>
        <a class="propertya_b" href="javascript:">报事报修</a>
        <a class="propertya_c" href="javascript:">建议意见</a>
        <a class="propertya_d" href="javascript:">小区公告</a>
        <a class="propertya_e" href="javascript:">物业风采</a>
        <a class="propertya_f" href="javascript:">邻里邻居</a>
        <a class="propertya_g" href="javascript:">小区活动</a>
        <a class="propertya_h" href="javascript:">小区集市</a>
        <a class="propertya_i" href="javascript:">我的社区</a>
        <a class="propertya_j" href="javascript:">便民中心</a>
        <a class="propertya_k" href="javascript:">物业福利</a>
        <a class="propertya_l" href="javascript:">签到送礼</a>
      </div>
    </div>
  </div>
</template>

<script>
import a2 from "../../img/a2.jpg"
  export default {
    name: "index",

    data(){
      return{
        address:"京誉府",
        // serviceSrc:a2,
        /*serviceSrc:[
        "../../im/a2.jpg",
        "../../img/a3.jpg",
        "../../img/a4.jpg"
        ]*/
      }

    }
  }
</script>

<style>
a{
  font-size: 14px;
  color: #999999;
  text-decoration: none;
}
.content{
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}
.bg{
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  right: 0;
  margin: auto;
  opacity:0;
  z-index: -1;
}
/*top*/
.top{
  line-height: 1.8;
  padding: 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.address{
  flex: 1;
  padding-left: 1.8rem;
  background: url("../../icon/address.png") no-repeat center left;
  background-size: 1.8rem auto;
}
.search{
  flex: 4;
  line-height: 32px;
  height: 32px;
  padding: 0 .8rem;
  margin: 0 1rem;
  border: 0;
  outline: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.2);
  border-radius: 1rem;
  background: url("../../icon/seach.png") no-repeat right center;
  background-size: 1.2rem auto;
  background-origin: content-box;
}
.message{
  width: 2rem;
}
/*banner*/
.banner{
  width: 94%;
  height: 6.8rem;
  margin: 0.2rem auto;
  position: relative;

}
.banner img{
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
/*特色服务*/
.service{
  text-align: left;
  margin: 0.9rem 0;
  overflow: hidden;
}
.service h3{
  font-size: 16px;
  display: inline;
  line-height: 32px;
  padding: 0.3rem 1.8rem;
  background-color: #f3f3f3;
  border: 1px solid #999999;
  border-left: 0;
  margin: 1rem auto;
}
/*--*/
.service_par{
  width: 96%;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: row;
}
.service_par img{
  flex: 1;
  width: 20%;
}
.service_par img:nth-child(2){
  margin: 0 2%;
}
/*物业部分*/
.property{
  width: 94%;
  margin: 0 auto;
}
.head{
  line-height: 32px;
  height: 32px;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.head h3{
  font-size: 16px;
  flex: 1;
  padding-left: 1rem;
}
.head span{
  font-size: 14px;
  color: #999999;
}
/*---*/
.property_icon{
  font-size: 0;
  margin-top: 1.2rem;
}
.property_icon a{
  font-size: 14px;
  display: inline-block;
  width: 23%;
  margin: 2% 1%;
  padding-top: 2rem;
}
.propertya_a{
  background: url("../../icon/i01.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_b{
  background: url("../../icon/i02.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_c{
  background: url("../../icon/i03.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_d{
  background: url("../../icon/i04.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_e{
  background: url("../../icon/i05.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_f{
  background: url("../../icon/i06.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_g{
  background: url("../../icon/i07.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_h{
  background: url("../../icon/i08.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_i{
  background: url("../../icon/i09.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_j{
  background: url("../../icon/i10.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_k{
  background: url("../../icon/i11.png") no-repeat center top;
  background-size: 1.6rem auto;
}
.propertya_l{
  background: url("../../icon/i12.png") no-repeat center top;
  background-size: 1.6rem auto;
}
</style>
