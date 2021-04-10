<template>
  <div class="navbar">
    <el-menu
      class="nav-el-menu"
      default-active="1"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF">
      <el-menu-item index="1" class="nav-el-menu-item" @click.native="home">
        <i class="el-icon-s-home"></i>
        <span slot="title" >首页</span>
      </el-menu-item>
      <el-menu-item index="2" class="nav-el-menu-item" @click.native="collection">
        <i class="el-icon-takeaway-box"></i>
        <span slot="title">垃圾回收</span>
      </el-menu-item>
      <el-menu-item index="4" class="nav-el-menu-item" @click.native="personal">
        <i class="el-icon-user"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>
    <div style="float:right;margin-top: 20px; margin-right: 100px;">
      <el-link v-if="islogin === false" type="success" @click="handleLogin">登录</el-link>
      <el-link v-if="islogin === true" type="success" @click="logout">退出登录</el-link>
    </div>
  </div>
</template>

<script>
    import { getToken } from '@/utils/auth'
    export default {
        data() {
            return {
                activeIndex: '1',
                islogin: false
            };
        },
        methods: {
            handleLogin(){
                this.$router.push('/login')
            },
            async logout() {
                await this.$store.dispatch('user/logout')
                this.$router.push(`/login?redirect=${this.$route.fullPath}`)
            },
            home(){
                this.$router.push(`/home`)
            },
            collection(){
                this.$router.push(`/collection/index`)
                this.activeIndex = 2
            },
            personal(){
                this.$router.push(`/personal/index`)
                this.activeIndex = 4
            },
        },
        created() {
            const hasToken = getToken()
            console.log(hasToken)
            if (hasToken) {
                this.islogin = true;
            } else {
                this.islogin = false
            }
            console.log(this.islogin)
        }
    }
</script>

<style lang="scss" scoped>
  .navbar {
    height: 60px;
    overflow: hidden;
    position: relative;
    background-color: #545c64;

    .nav-el-menu {
      position: absolute;
      left:50%;
      transform: translateX(-50%);
      height: 100%;
      .nav-el-menu-item {
        height: 100%;
        font-size: larger;
      }
    }



  }
</style>
