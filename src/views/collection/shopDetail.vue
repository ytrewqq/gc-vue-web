<template>
  <div class="shop-detail">
    <el-row class="shop-detail-item">

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
    <el-card class="shop-comment" shadow="never">
      <div slot="header">
        <span>回收站评论</span>
      </div>
      <span v-if="commentInfoList.length === 0" style="text-align: center">暂无评论</span>
      <div v-for="commentInfo in commentInfoList" :key="commentInfo" style="margin-bottom: 30px;">
        <div style="margin-bottom: 10px;">
          <el-row>
            <el-col :span="4">
              <span style="height: 20px;">用户: {{commentInfo.userName}}</span>
            </el-col>
            <el-col :span="6">
              <span style="height: 20px;">时间: {{commentInfo.createTime}}</span>
            </el-col>
            <el-col :span="6">
              <el-rate
                v-model="commentInfo.score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                style="width: 200px;">
              </el-rate>
            </el-col>
          </el-row>
        </div>
        <span>
          {{commentInfo.content}}
        </span>
      </div>
    </el-card>

    <el-row class="shop-detail-item">
    </el-row>
  </div>

</template>

<script>
    import {getComments} from '@/api/comment'
    export default {
        name: 'ShopDetail',
        data() {
            return {
                shop: {},
                commentInfoList: []
            }

        },
        created() {
            this.shop = this.$route.params.shop
            const commentReq = {
                shopId: this.shop.shopId
            }
            getComments(commentReq).then(response => {
                if (response.code === '000000'){
                    this.commentInfoList = response.data
                } else {
                    this.$message({
                        message: response.msg,
                        type: "error"
                    });
                }
            })
        },

    }
</script>

<style lang="scss" scoped>
  .shop-detail {
    background-color: #E4E7ED;
    position: absolute;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);

    .shop-detail-item {
      height: 80px;
      width: 1280px;
      margin-top: 30px;
      margin-left: 20px;
    }

    .shop-comment {
      min-height: calc(100vh - 140px);
      /*height: 100%;*/
      background-color: #E4E7ED;
      border: 0px;
      overscroll-behavior-y: none;
    }

  }

</style>
