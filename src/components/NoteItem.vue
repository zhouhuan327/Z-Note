<template>
<!--   <div class="memo-container">-->
<!--    <div class="memo">-->
<!--      <div class="mark"></div>-->
<!--      <div class="memo-heading">-->
<!--        <h5 class="title">{{note.title}}</h5>-->
<!--        <ul class="tools">-->
<!--          <li class="edit"-->
<!--              @click="editNote"><i class="iconfont icon-edit"></i></li>-->
<!--          <li class="delete"-->
<!--              @click="deleteNote"><i class="iconfont icon-delete-materialco"></i></li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <h6 class="memo-info">-->
<!--        <span class="timeStamp">{{note.createTime}}</span>-->
<!--        <span class="category">分类: {{$store.state.actionHelper.getCategoryName(note.categoryId) }}</span>-->
<!--      </h6>-->
<!--      <div class="content">-->
<!--        <div class="text">{{note.content}}</div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <el-card class="box-card" :body-style="{ maxHeight: '80px' }">
    <div slot="header">
      <el-row class="row-title"   type="flex">
        <el-col :span="18">
          <span class="note-title">{{note.title}}</span>
        </el-col>
        <el-col style="text-align: right"  :span="6">
            <i @click="deleteNote"  class="iconfont icon-delete-materialco"></i>
            <i @click="editNote" class="iconfont icon-edit"></i>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col :lg="18" :md="16" :sm="12"><time class="time">{{note.createTime}}</time></el-col>
        <el-col :lg="6" :md="8" :sm="12">分类: <span>{{$store.state.actionHelper.getCategoryName(note.categoryId) }}</span></el-col>
      </el-row>
    </div>
    <div ref="text"  class="content">
      {{FilterContent}}
    </div>
  </el-card>
</template>

<script lang ="ts">
import ItemData from '../model/ItemData'
import {Vue,Component,Prop} from 'vue-property-decorator'
import ActionHelper from '../store/ActionHelper'

@Component
export default class NoteItem extends Vue  {
    private actionHelper: ActionHelper = this.$store.state.actionHelper
    @Prop() private note!: ItemData
    
    editNote(){
      const obj = JSON.parse(JSON.stringify(this.note));
      this.$store.commit("showEditor",obj)
    }
    deleteNote(): void{
      if(!window.confirm(`确认要删除${this.note.title}的笔记吗`)) return;
      this.actionHelper.remove(this.note.id)
    }
    get FilterContent(){
      const str = this.note.content;
      return str.length>45?str.slice(0,40)+'...':str;
    }
}
</script>
<style scoped lang="scss">
  .box-card {
    width: 25vw;
    min-width: 250px;
    margin: 10px 20px;
    .content{
      text-align: left;
      line-height: 25px;

    }
    .iconfont{
      font-size:14px;font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
      margin-right: 14px;
      cursor: pointer;
    }
    .row-title{
      margin-bottom: 20px;
    }
    .note-title{
      font-size: 16px;
      color: #757575;
    }
    .time{
      color: #757575;
    }
    @media screen and(max-width: 500px) {
      width: 95%;
      margin: 10px 0;
      .row-title{
        text-align: left;
      }
    }
  }
</style>