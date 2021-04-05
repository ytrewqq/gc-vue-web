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
      <el-menu-item index="3" class="nav-el-menu-item" @click.native="classify">
        <i class="el-icon-search"></i>
        <span slot="title">垃圾分类</span>
      </el-menu-item>
      <el-menu-item index="4" class="nav-el-menu-item" @click.native="personal">
        <i class="el-icon-user"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            home(){
                this.$router.push(`/home`)
            },
            collection(){
                this.$router.push(`/collection/index`)
                this.activeIndex = 2
            },
            classify(){
                this.$router.push(`/classify/index`)
                this.activeIndex = 3
            },
            personal(){
                this.$router.push(`/personal/index`)
                this.activeIndex = 4
            },
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
