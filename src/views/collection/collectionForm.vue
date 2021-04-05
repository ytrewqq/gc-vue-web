<template>
  <div class="collection-form">
    <el-form ref="form" :model="orderForm" label-width="80px">
      <el-form-item label="回收站:">
        {{shop.shopName}}
      </el-form-item>
      <el-form-item label="联系电话:">
        <el-input v-model="orderForm.custPhone"></el-input>
      </el-form-item>

      <el-form-item label="废品类型:">
        <el-select
          v-model="orderForm.garbageType"
          multiple
          collapse-tags
          placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="废品重量:">
        <el-input v-model="orderForm.garbageWeight" style="width: 75%;"></el-input> 单位/kg
      </el-form-item>
      <el-form-item label="填写地址:">
        <el-input type="textarea" v-model="orderForm.address"></el-input>
      </el-form-item>
      <el-form-item label="回收方式:">
        <el-select v-model="orderForm.delivery" placeholder="请选择">
          <el-option
            v-for="item in deliveryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
    import { addShop } from '@/api/order'
    export default {
        name: "CollectionForm",
        data() {
            return {
                shop: {},
                orderForm: {},
                typeOptions: [{
                    value: '废金属',
                    label: '废金属'
                }, {
                    value: '废塑胶',
                    label: '废塑胶'
                }, {
                    value: '废纸品',
                    label: '废纸品'
                }, {
                    value: '废电子',
                    label: '废电子'
                }, {
                    value: '废电器',
                    label: '废电器'
                }],
                deliveryOptions: [{
                    value: '上门回收',
                    label: '上门回收'
                }, {
                    value: '主动回收',
                    label: '主动回收'
                }],
            }
        },
        methods: {
            onSubmit() {
                const addForm = {
                    shopId: this.shop.shopId,
                    custPhone: this.orderForm.custPhone,
                    garbageType: this.orderForm.garbageType.toString(),
                    garbageWeight: this.orderForm.garbageWeight,
                    address: this.orderForm.address,
                    delivery: this.orderForm.delivery
                }
                addShop(addForm).then(response => {
                    if (response.code === '000000'){
                        this.$router.push(`/collection/index`)
                    } else {
                        this.$message({
                            message: response.msg,
                            type: "error"
                        });
                    }
                })
            }
        },
        created() {
            this.shop = this.$route.params.shop
        }
    }
</script>

<style lang="scss" scoped>
  .collection-form {
    overflow: hidden;
    background-color: #E4E7ED;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
  }

</style>
