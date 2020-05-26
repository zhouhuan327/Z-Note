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
<!--        <el-menu-item>-->
<!--          <el-input placeholder="请输入内容">-->
<!--            <el-button slot="append" icon="el-icon-search"></el-button>-->
<!--          </el-input>-->
<!--        </el-menu-item>-->
      </el-menu>
    </div>

  <!-- 菜单栏 -->
<!--  <nav class="navbar navbar-default navbar-fixed-top">-->
<!--    <div class="container">-->
<!--      <div class="navbar-header">-->
<!--        <a class="navbar-brand">-->
<!--          <img height="40" src="../assets/logo.png" />➕-->
<!--          <img-->
<!--            height="40"-->
<!--            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUAesz///8Ac8oAcMmFsN8Ad8u50ewAdcqjweUAbshRktQAa8cAacd1pNpHjtM8idHb5/Xz9/zn7/gyhdDJ2/BtodmNsd8AZsbS4fKzy+kff86gveRkm9eErN05gs6qxuj1Ch+yAAADMElEQVR4nO2Z24KiMAxAS2sJF+UOItD1//9ywZlRCmXoBd19yHkbqeOxbZKmEoIgCIIgCIIgCIIgCIIgCIIgCIIgCIL8b3ATFG8H+gTsDLpyJC3TB0maJEm0Znw1mZ6XSweIO3GvsqIo2urWD2GokNyDNp4Jg/RFgYhMepz7g7mEoUI9U+BwKdYjqpR+TIGDrx7TnD+kAH/yrUF++E6Fy48C3zYYHYzWggWWCtlvwwJmonC3Uoh33lYbpAg7BR7tDez0Y9NOIaz2Bgb602A5C4uX82KRIW4GCQrqQKaf77Nq8TCIHv8a5DAKuuv5HEevNJEPsb7B+IWozHWecES8ePr15aiUlCL2eJWHw88U2Narb9j835/UAS5FZP8MQFZPfxe1SURaK8zT0mxI2I9T0JnWCGeFfL7scI/MkvMhCp5UlMBtF1gqqI5SH1CYZ4H+gKk3V4B2NsYbjnbQUZDzQi7YsWuhNQuLQ0ZV0iMldBQI9Rb4yfmIWDBQYLelg9fW1DknmSjwVHFsK4R7YtRXIKHyvFf0cISEngIB9dkx7w9YDk0F3m2coPOTc5LWVCCg2g4PssRxInQVCJSKdu6Lxi1faisQvt2DVE7zoK8wjh22GprMJV2aKBDgYmM1Koc9aaQwpmrWqCUcarihwnTRMrQqh8h6KYwVptNa4q8jtDLqJRwVpuBI14UrtZ0GK4WpkemWIdrY7khLhaktI3Kz29puSGuFaTl6ycF2MzgojDVc2hEGdwyWCqrmVer6B8vNoF0paSPW/at0jLi8V4EmrZevww7mO1K8U4HSx6IX15XCPFG+cRbgeVnZLpoYTj6yFzibXT1XRPqYD0VEJyWgrHxNBISfyQtU/hjPC9JrSAFoeI3kilm9LTteV+eD3O+FaFbF8n01Yv/m9VusszTQiAh1J7UisD42aQQl273+HSlsBWxuWdQk9udXrbsm2J2Hi0MnoVcj9n5JES79lGaZYukvP8sUqdMdsG6x5lRsSOS9Y29tcGQhtUKi6EvXa3B68l/s1Do4l0JKim0/xAfcswB7sTuhHFgcl9FQ1/UQkXN46OWfAZzDxD/6dARBEFv+AuqFKQU8WzNVAAAAAElFTkSuQmCC"-->
<!--          />-->
<!--        </a>-->
<!--        <button-->
<!--          type="button"-->
<!--          class="navbar-toggle collapsed"-->
<!--          data-toggle="collapse"-->
<!--          data-target=".navbar-collapse"-->
<!--          aria-expanded="false"-->
<!--        >-->
<!--          <span class="icon-bar"></span>-->
<!--          <span class="icon-bar"></span>-->
<!--          <span class="icon-bar"></span>-->
<!--        </button>-->
<!--      </div>-->
<!--      <div class="collapse navbar-collapse navbar-right">-->
<!--        <ul class="nav navbar-nav">-->
<!--          <li class="add dropdown">-->
<!--            <a class="create-new dropdown-toggle" data-toggle="dropdown"-->
<!--              >新建</a-->
<!--            >-->
<!--            <ul class="dropdown-menu">-->
<!--              <li>-->
<!--                <a @click="showEditor">文本便签</a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="categories dropdown">-->
<!--            <a class="current-category dropdown-toggle" data-toggle="dropdown">-->
<!--              全部-->
<!--              <span class="count badge">{{countByCateId(-1)}}</span>-->
<!--            </a>-->
<!--            <ul class="dropdown-menu">-->
<!--              <li class="total"-->
<!--                  @click="filterByCateId(-1)">-->
<!--                <a>-->
<!--                  全部-->
<!--                  <span class="count badge">{{countByCateId(-1)}}</span>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li class="divider"></li>-->
<!--              <li @click="filterByCateId(0)">-->
<!--                <a>-->
<!--                  工作-->
<!--                  <span class="count badge">{{countByCateId(0)}}</span>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="filterByCateId(1)">-->
<!--                <a>-->
<!--                  生活-->
<!--                  <span class="count badge">{{countByCateId(1)}}</span>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="filterByCateId(2)">-->
<!--                <a>-->
<!--                  学习-->
<!--                  <span class="count badge">{{countByCateId(2)}}</span>-->
<!--                </a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
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
