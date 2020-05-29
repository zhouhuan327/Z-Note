<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div @click="closeEditor" class=" wrapper"></div>
    <div class="edit-dialog">
      <header>
        <el-select class="category-select" v-model="note.categoryId"  placeholder="请选择">
          <el-option
                  v-for="item in categoryArr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
            <svg  class="icon" aria-hidden="true">
              <use :xlink:href="getIconName(item.value)"></use>
            </svg>
            <span>{{item.label}}</span>
          </el-option>
        </el-select>
        <div>
          <el-button @click="save" plain size="mini" >保存</el-button>
          <el-button @click="closeEditor" plain size="mini" >取消</el-button>
        </div>
      </header>
      <main class="mt10">
        <el-input
                class="title"
                placeholder="标题"
                suffix-icon="el-icon-edit-outline"
                size="medium"
                v-model="note.title"
                >
        </el-input>
        <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="note.content"
                >
        </el-input>
      </main>
    </div>
  </div>
</template>

<script lang = "ts">
import {Vue,Component} from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import Category from '../model/CateEnum'

@Component
export default class NoteEdit extends Vue {

    categoryArr = [{
      label:'生活',
      value:Category.Life
    },{
      label:'工作',
      value:Category.Work
    },{
      label:'学习',
      value:Category.Study
    }]
    //编辑框数组
    note: ItemData = new ItemData(Category.Life,"","")
    created(){
      const editNote = this.$store.state.updatingNote;
      console.log(1);
      if(editNote){
        this.note = editNote
      }
    }
    closeEditor(){
      this.$store.state.isShowEditor = false
    }
    save(){
      if( this.note &&
      this.note.categoryId > -1 &&
      this.note.title.trim().length > 0 &&
      this.note.content.trim().length > 0){
        if(this.note.id < 0){
          this.$store.state.actionHelper.add(this.note)
        }else{
           this.$store.state.actionHelper.update(this.note)
        }
        

        this.$store.state.isShowEditor = false;
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      }
      else {
        alert("对不起，输入错误~~！");
      }
    }
    getIconName(id: number): string{
      return `#icon-${Category[id].toLowerCase()}`
    }
}
</script>
<style lang="scss" >
  .icon{
    width: 1em;
    height: 1em;
    cursor: pointer;
    vertical-align: -0.15em;
    margin-right: 10px;
  }

  .wrapper{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
    background-color: #222;
    opacity: 0.3;
  }
  .edit-dialog{
    position: fixed;
    background: #FFffff;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    border-radius: 5px;
    @media screen and(min-width: 600px){
      top: 30%;
      left: 50%;
      width: 50%;
      transform: translate(-50%,-50%);
      min-height: 100px;
      padding: 16px 20px;
      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 6%;
      }
      .title{
        margin-bottom: 20px;
      }
      .el-textarea{
        >textarea{
          height: 200px;
        }
      }
      .category-select{
        width: 120px;
      }
    }
    @media screen and(max-width: 600px) {
      top: auto;
      left: 0;
      width: 100%;
      height: 95%;
      bottom: 0;
      border-radius: 15px;
      animation: slide-enter 0.4s ease;
      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 6%;
        padding: 0 15px;
      }
      .title{
        >input{
          border: 0;
          margin-bottom: 10px;
        }
      }
      .el-textarea{

      }
      .category-select{
        width: 120px;
      }

    }
  }


 @keyframes slide-enter {
   from {
     height: 0;
   }
   to {
     height: 95%;
   }

 }


</style>