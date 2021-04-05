<template>
  <div class="shop-detail">
    <el-row class="shop-detail-item">
      <el-row>
        <el-col :span="3" class="shop-list-attr"><span>{{shop.shopName}}</span></el-col>
        <el-col :span="6" class="shop-list-attr">
          <el-row>
            <span style="width: 320px">电话: {{shop.shopPhone}}</span>
          </el-row>
          <el-row>
            <span style="width: 320px">地址: {{shop.shopAddress}}</span>
          </el-row>
        </el-col>
        <el-col :span="8" class="shop-list-attr"><span>{{shop.shopIntroduce}}</span></el-col>
        <el-col :span="3" class="shop-list-attr">
          <el-rate
            v-model="shop.shopScore"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="shop-detail-item">
    </el-row>
  </div>

</template>

<script>

    export default {
        name: 'ShopDetail',
        data(){
            return {
                shop: {}
            }

        },
        created() {
            this.shop = this.$route.params.shop
        }
    }
</script>

<style lang="scss" scoped>
  .shop-detail {
    overflow: hidden;
    background-color: #E4E7ED;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    .shop-detail-item {
      height: 80px;
      width: 1280px;
      margin-top: 10px;
    }

  }

</style>
