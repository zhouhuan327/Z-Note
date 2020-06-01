<template>
    <div class="menu-bar">
      <el-menu mode="horizontal">
        <el-menu-item><img class="logo" src="../assets/logo.png" alt=""></el-menu-item>
        <el-menu-item  @click="showEditor" >新增</el-menu-item>
        <el-submenu index="2">
          <template slot="title">笔记</template>
          <el-menu-item  @click="filterByCateId(-1)" index="2-1"><i class="iconfont icon-all"></i>全部<span class="count">{{countByCateId(-1)}}</span></el-menu-item>
          <el-menu-item  @click="filterByCateId(0)" index="2-2"><i class="iconfont icon-work"></i>工作<span class="count">{{countByCateId(0)}}</span></el-menu-item>
          <el-menu-item  @click="filterByCateId(1)" index="2-3"><i class="iconfont icon-life"></i>生活<span class="count">{{countByCateId(1)}}</span></el-menu-item>
          <el-menu-item  @click="filterByCateId(2)" index="2-4"><i class="iconfont icon-study"></i>学习<span class="count">{{countByCateId(2)}}</span></el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemData from '../model/ItemData'

@Component
export default class MenuBar extends Vue {
  countByCateId(id: number): number{
    const noteList = this.$store.state.actionHelper.noteList;
    if(id === -1){
      return noteList.length
    }else{
      return noteList.filter((ele: ItemData) => ele.categoryId === id).length;
    }
    
  }
  filterByCateId(id: number): void{
    this.$store.state.filterCateId = id;
  }
  showEditor(){
    this.$store.state.updatingNote = new ItemData()
    this.$store.state.isShowEditor = true
  }
}
</script>
<style lang="scss" scoped >

  .menu-bar{
    .logo{
      width: 50px;
      height: 50px;
      margin:0 5px;
    }

  }
  .count{
    display: inline-block;
    font-size: 13px;
    line-height: 20px;
    border-radius: 4px;
    padding: 0 5px;
    background: #909399;
    height: 20px;
    color:#fff;
    margin-left: 10px;
  }
</style>
