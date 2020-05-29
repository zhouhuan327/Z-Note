<template>
  <el-card class="box-card" :body-style="{ minHeight: '50px',maxHeight:'90px' }">
    <div slot="header">
      <el-row class="row-title"  type="flex">
        <el-col :lg="18" :md="16" :sm="16" :xs="16">
          <span class="note-title">{{note.title}}</span>
        </el-col>
        <el-col  style="text-align: right"  :lg="6" :md="8" :sm="8" :xs="8">
          <svg  @click="editNote" class="icon mr10" aria-hidden="true">
            <use xlink:href="#icon-edit"></use>
          </svg>
          <svg @click="deleteNote" class="icon mr10" aria-hidden="true">
            <use xlink:href="#icon-delete"></use>
          </svg>

        </el-col>
      </el-row>
      <el-row >
        <el-col :lg="18" :md="16" :sm="16" :xs="16">
          <div class="time">{{note.createTime}}</div>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8" :xs="8">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${getIconName}`"></use>
          </svg>
        </el-col>
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
      const note = JSON.parse(JSON.stringify(this.note));
      this.$store.commit("showEditor",note)
    }
    deleteNote(): void{
      this.$confirm('确定吗','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        this.actionHelper.remove(this.note.id)
        this.$message('删除成功')
      })

    }
    get FilterContent(){
      const str = this.note.content;
      return str.length>45?str.slice(0,40)+'...':str;
    }
    get getIconName(){
      const type = this.$store.state.actionHelper.getCategoryName(this.note.categoryId).toLowerCase()
      return `icon-${type}`

    }

}
</script>
<style scoped lang="scss">
  .icon{
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
    vertical-align: -0.15em;
  }

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
    .el-row{
      height: 25px;
      line-height: 25px
    }
    .row-title{
      margin-bottom: 10px;
    }
    .note-title{
      font-size: 16px;
      color: #3d3737;
    }
    .time{
      height: 100%;
      font-size: 14px;
      color: rgba(117, 117, 117, 0.66);
    }
    @media screen and(max-width: 600px) {
      width: 95%;
      margin: 10px 0;
    }
    &:hover{
      box-shadow:0 2px 12px 0 rgba(0,0,0,0.4)
    }
  }
</style>