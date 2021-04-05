<template>
  <div class="home-container">
    <el-row :gutter="20" class="home-banner">
      <el-col :span="24">
        <el-carousel indicator-position="outside">
          <el-carousel-item>
            <img class="pic-404__parent" src="@/assets/banner_images/20170802115018_82957.jpg" alt="banner">
          </el-carousel-item>
          <el-carousel-item>
            <img class="pic-404__parent" src="@/assets/banner_images/20170802115027_53533.jpg" alt="banner">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .home-container {
    overflow: hidden;
    background: #409EFF;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .home-banner {
      height: 100px;
      background-color: #20a0ff;
      align-content: center;
      justify-content: center;
      width: 1280px;
    }


  }

</style>
