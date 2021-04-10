<template>
  <div class="collection-container">
    <div class="collection-shop">
      <div v-for="shop in shopList" class="collection-shop-list">
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
          <el-col :span="4" class="shop-list-attr">
            <el-row>
              <el-button type="primary" size="mini" @click="garbage_collect(shop)">垃圾回收</el-button>
            </el-row>
            <el-row>
              <el-button type="primary" size="mini" @click="show_shop(shop)">站点详情</el-button>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
    import { getShops } from '@/api/shop'
    export default {
        name: 'Collection',
        data() {
            return {
                listLoading: true,
                totalPage: 1,
                shopList: [],
            }
        },
        methods: {
            garbage_collect(shopvar){
                this.$router.push({ name: 'CollectionForm',params: {shop: shopvar}})
            },
            show_shop(shopvar){
                this.$router.push({ name: 'ShopDetail',params: {shop: shopvar}})
            }
        },
        created() {
            this.listLoading = true
            const queryForm = {
                pageNum: 1,
                pageSize: this.pageSize
            }
            getShops(queryForm).then(response => {
                if (response.code === '000000'){
                    this.shopList = response.data.list
                    this.listLoading = false
                    this.totalPage = response.data.total
                } else {
                    this.$message({
                        message: response.msg,
                        type: "error"
                    });
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
  .collection-container {
    overflow: hidden;
    background-color: #E4E7ED;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .collection-shop{
      width: 1280px;
      padding-top: 0px;

      .collection-shop-list{
        margin-right: 20px;
      }

      .shop-list-attr{
        height: 70px;
        padding-left: 10px;
        padding-top: 10px;
        margin-top: 10px;
      }
    }

    .comment-container{
      width: 1280px;

      .comment-title{
        height: 20px;
        width: 1280px;
      }
      .comment-content{
        height: 30px;
        width: 1280px;
      }
    }
  }

</style>
