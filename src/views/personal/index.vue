<template>
  <div class="personal-container">
    <el-row class="basic-info">
      <el-col :span="4">
        <div style="width: 180px; height: 210px;text-align: center">
          <div class="demo-image">
            <el-image
              style="width: 180px; height: 180px"
              :src="url"></el-image>
          </div>
          <span >个人信息</span>
        </div>
      </el-col>
      <el-col :span="16" style="height: 210px">
        <el-row style="height: 60px; padding-top: 10px">
          <el-col :span="12" >
            <span class="basic-info-detail">姓名： {{userInfo.userName}}</span>
          </el-col>
          <el-col :span="12">
            <span class="basic-info-detail">手机号： {{userInfo.phone}}</span>
          </el-col>
        </el-row>
        <el-row style="height: 60px;">
          <el-col :span="12">
            <span class="basic-info-detail">身份证： {{userInfo.idNo}}</span>
          </el-col>
          <el-col :span="12">
            <span class="basic-info-detail">性别： {{userInfo.sex}}</span>
          </el-col>
        </el-row>
        <el-row style="height: 60px;">
          <el-col :span="24">
            <span class="basic-info-detail">地址： {{userInfo.address}}</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

      <el-row>
        <el-col :span="24" class="order-info">
          <el-card class="box-card" style="background-color: #E4E7ED">
            <div slot="header" class="clearfix">
              <span>我的订单</span>
            </div>
            <el-tabs @tab-click="handleClick" style="background-color: #E4E7ED">
              <el-tab-pane label="全部订单" name="first" style="background-color: #E4E7ED">
                <order></order>
              </el-tab-pane>
              <el-tab-pane label="未完成" name="second">
                <order></order>
              </el-tab-pane>
              <el-tab-pane label="已完成" name="third">
                <order></order>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>

    import Order from "./order";
    import { personalDetail } from '@/api/user'
    export default {
        name: 'Personal',
        components: {Order},
        data(){
            return {
                userInfo: {},
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        },
        created() {
          personalDetail().then(response => {
              if (response.code === '000000'){
                  this.userInfo = response.data
              }
          })
        }
    }
</script>

<style lang="scss" scoped>
  .personal-container {
    overflow: hidden;
    background-color: #E4E7ED;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    .basic-info {
      height: 210px;
      width: 1280px;

      .basic-info-detail {
        text-align: left;
        height: 60px;
      }
    }

    .order-info{
      width: 1280px;
      background-color: #E4E7ED;
    }
  }

</style>
