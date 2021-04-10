<template>
  <div class="home-container">
    <el-row class="home-banner">
      <el-col :span="24">
        <el-carousel trigger="click" :interval="3000" arrow="always" indicator-position="none">
          <el-carousel-item v-for="img in imglist" :key="img.index">
            <img class="banner-img" :src="img.src" alt="加载失败">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row style="height: 150px;">
      <el-col :span="24" class="home-searcher">
        <div>
          <span class="searcher-title">垃圾分类查询</span>
        </div>
        <div style="margin-top: 10px;">
          <el-input placeholder="请输入内容" v-model="keyword">
            <el-button @click.native.prevent="showResult()" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div style="margin-top: 10px;">
          <span style="margin-right: 10px;">热门查询:</span>
          <el-link style="padding-bottom: 5px; font-size: medium" v-for="hitem in hitems" :key="hitem.id" type="primary">
            {{hitem.keyword+"\xa0"}}
          </el-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-row class="common-gc-row">
        <el-col>常见可回收：
          <el-link style="font-size: medium" v-for="recyclable in recyclableList" :key="recyclable.id" type="success">{{recyclable.garbageName +
            "\xa0"}}
          </el-link>
        </el-col>
      </el-row>
      <el-row class="common-gc-row">
        <el-col>常见有害垃圾：
          <el-link style="font-size: medium" v-for="harmful in harmfulList" :key="harmful.id" type="danger">{{harmful.garbageName + "\xa0"}}</el-link>
        </el-col>

      </el-row>
      <el-row class="common-gc-row">
        <el-col>常见湿垃圾：
          <el-link style="font-size: medium" v-for="wet in wetList" :key="wet.id" type="warning">{{wet.garbageName + "\xa0"}}</el-link>
        </el-col>

      </el-row>
      <el-row class="common-gc-row">
        <el-col>常见干垃圾：
          <el-link style="font-size: medium" v-for="dry in dryList" :key="dry.id" type="primary">{{dry.garbageName + "\xa0"}}</el-link>
        </el-col>
      </el-row>
    </el-row>
    <el-dialog
      :visible.sync="resultDialogVisible"
      fullscreen
      :modal = "false">
      <el-row>
        <el-col>
          <el-row style="height: 45px;">
            <div class="result-gc">
              <span style="font-size: x-large;color: #1482f0">{{this.keyword}}</span><span style="font-size: large;">属于</span><span style="font-size: x-large;color: #1482f0">{{gcresult.classification}}</span>
            </div>
          </el-row>
          <el-row style="height: 45px;">
          </el-row>
          <el-row>
            <span style="font-size: large;">什么是</span>
            <span style="font-size: x-large;color: #f04313">{{gcresult.classification}}：</span>
            <span style="font-size: large;">{{gcresult.classificationDesc}}</span>
          </el-row>
          <el-row style="margin-top: 30px;">
            <span style="font-size: x-large;color: #f04313">{{gcresult.classification}}</span>
            <span style="font-size: large;">投放规则：</span>
            <span style="font-size: large;">{{gcresult.disposalDesc}}</span>
          </el-row>
          <el-row style="margin-top: 30px;">
            <span style="font-size: large;">常见</span>
            <span style="font-size: x-large;color: #f04313">{{gcresult.classification}}：</span>
            <el-link style="font-size: medium" v-for="item in hotList" :key="item.id" type="primary">{{item.garbageName + "\xa0"}}</el-link>
          </el-row>
        </el-col>
      </el-row>

    </el-dialog>
  </div>
</template>

<script>
  import { getCommonList, getKeyword, getHots} from '@/api/garbage'
    export default {
        name: 'Home',
        data() {
            return {
                resultDialogVisible: false ,
                icon: require('@/assets/icon/search_icon.jpg'),
                imglist: [
                    {
                        index: 0,
                        src: require("@/assets/banner_images/20170802115018_82957.jpg"),
                    },
                    {
                        index: 1,
                        src: require("@/assets/banner_images/20170802115027_53533.jpg"),
                    }],
                keyword: '',
                hitems: [],
                recyclableList: [],
                harmfulList: [],
                wetList: [],
                dryList: [],
                gcresult: {},
                hotList:[]

            }
        },
        created(){
          getCommonList().then(response => {
              if (response.code === '000000'){
                  this.recyclableList = response.data.recyclableList
                  this.harmfulList = response.data.harmfulList
                  this.wetList = response.data.wetList
                  this.dryList = response.data.dryList
              }
          })
            getHots().then(response => {
                if (response.code === '000000'){
                    this.hitems = response.data
                }
            })
        },
        methods : {
            showResult(){
                const req = {
                    keyword: this.keyword
                }
                getKeyword(req).then(response => {
                    if (response.code === '000000'){
                        this.gcresult = response.data
                        this.resultDialogVisible = true
                        if (this.gcresult.classification === '可回收垃圾'){
                          this.hotList = this.recyclableList
                        }
                        if (this.gcresult.classification === '有害垃圾'){
                            this.hotList = this.harmfulList
                        }
                        if (this.gcresult.classification === '湿垃圾'){
                            this.hotList = this.wetList
                        }
                        if (this.gcresult.classification === '干垃圾'){
                            this.hotList = this.dryList
                        }
                    }
                })

            }
        }
    }
</script>

<style lang="scss">
  .home-container {
    overflow: hidden;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #E4E7ED;
    height: 100%;

    .el-dialog__wrapper {
      .el-dialog {
        /*background-color: #e4e7ed;*/
      }
    }

    .result-gc {
      position: absolute;
      left: 65%;
      width: 50%;
      transform: translateX(-50%);
      margin-top: 10px;
    }

    .home-banner {
      align-content: center;
      justify-content: center;
      height: 300px;
      width: 1280px;

      .banner-img {
        width: 100%;
        height: 100%;
      }
    }

    .home-searcher {
      position: absolute;
      left: 50%;
      width: 50%;
      transform: translateX(-60%);
      margin-top: 10px;

      .searcher-title {
        position: relative;
        left: 40%;
        transform: translateX(-60%);
        font-size: x-large;
        height: 35px;
      }
    }

    .common-gc-row {
      height: 60px;
    }
  }

</style>
