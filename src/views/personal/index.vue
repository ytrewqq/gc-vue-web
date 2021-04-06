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
            <el-tabs v-model="activePane" @tab-click="tabclick" style="background-color: #E4E7ED">
              <el-tab-pane label="全部订单" name="all" style="background-color: #E4E7ED">
                <el-table
                  :data="orderList"
                  style="width: 100%;background-color: #E4E7ED">
                  <el-table-column
                    prop="orderNo"
                    label="订单号"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="shopName"
                    label="回收站"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="garbageWeight"
                    label="废品重量">
                  </el-table-column>
                  <el-table-column
                    prop="amount"
                    label="废品金额">
                  </el-table-column>
                  <el-table-column
                    prop="garbageType"
                    label="废品属性">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="回收地址">
                  </el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="回收时间">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    width="100">
                    <template slot-scope="scope">
                      <el-button @click="commentclick(scope.row)" type="text" size="small">评论</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="未完成" name="undo">
                <el-table
                  :data="orderList"
                  style="width: 100%;background-color: #E4E7ED">
                  <el-table-column
                    prop="orderNo"
                    label="订单号"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="shopName"
                    label="回收站"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="garbageWeight"
                    label="废品重量">
                  </el-table-column>
                  <el-table-column
                    prop="amount"
                    label="废品金额">
                  </el-table-column>
                  <el-table-column
                    prop="garbageType"
                    label="废品属性">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="回收地址">
                  </el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="回收时间">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    width="100">
                    <template slot-scope="scope">
                      <el-button @click="commentclick(scope.row)" type="text" size="small">评论</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="已完成" name="finish">
                <el-table
                  :data="orderList"
                  style="width: 100%;background-color: #E4E7ED">
                  <el-table-column
                    prop="orderNo"
                    label="订单号"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="shopName"
                    label="回收站"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="garbageWeight"
                    label="废品重量">
                  </el-table-column>
                  <el-table-column
                    prop="amount"
                    label="废品金额">
                  </el-table-column>
                  <el-table-column
                    prop="garbageType"
                    label="废品属性">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="回收地址">
                  </el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="回收时间">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    width="100">
                    <template slot-scope="scope">
                      <el-button @click="commentclick(scope.row)" type="text" size="small">评论</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
            <el-dialog title="评论" :visible.sync="dialogCommentVisible" width="50%" :show-close=false :modal=false center>
              <el-form>
                <el-form-item label="评分:">
                  <el-rate v-model="commentForm.score" style="margin-top: 10px;"></el-rate>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="commentForm.content">
                  </el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogCommentVisible = false">取 消</el-button>
                <el-button type="primary" @click.native="submitComment()">确 定</el-button>
              </div>
            </el-dialog>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>

    import { getOrders } from '@/api/order'
    import { personalDetail } from '@/api/user'
    import { addComment } from '@/api/comment'
    export default {
        name: 'Personal',
        data(){
            return {
                commentForm: {},
                dialogCommentVisible: false,
                activePane: 'all',
                userInfo: {},
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                orderList: [],
                order: {}
            }
        },
        methods: {
            tabclick(){
                const userOrderReq = {
                    range: this.activePane,
                    userId: ''
                }
                getOrders(userOrderReq).then(response => {
                    if (response.code === '000000'){
                        this.orderList = response.data
                    }
                })
            },
            commentclick(order){
                this.dialogCommentVisible = true
                this.order = order
                console.log(this.order)
            },
            submitComment(){
              const commentReq = {
                  orderNo: this.order.orderNo,
                  shopId: this.order.shopId,
                  userId: this.order.userId,
                  score: this.commentForm.score,
                  content: this.commentForm.content
              }
                addComment(commentReq).then(response => {
                    if (response.code !== '000000'){
                        this.$message({
                            message: response.msg,
                            type: "error"
                        });
                    } else {
                        this.dialogCommentVisible = false
                    }
                })
            }
        },
        created() {
          personalDetail().then(response => {
              if (response.code === '000000'){
                  this.userInfo = response.data
              }
          })
            const userOrderReq = {
              range: this.activePane,
              userId: ''
            }
            getOrders(userOrderReq).then(response => {
                if (response.code === '000000'){
                    this.orderList = response.data
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
