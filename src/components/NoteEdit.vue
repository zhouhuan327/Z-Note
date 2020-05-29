<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div @click="closeEditor" class=" wrapper"></div>
    <div class="edit-dialog">
      <div class="box"></div>
    </div>
<!--    <div id="new-markdown"-->
<!--         class="editor-layer">-->
<!--      <div class="editor-top">-->
<!--        <input class="editor-title form-control"-->
<!--               type="text"-->
<!--               placeholder="标题"-->
<!--               v-model="note.title" />-->
<!--        <div class="dropdown select-category">-->
<!--          <button class="btn btn-default dropdown-toggle"-->
<!--                  data-toggle="dropdown">-->
<!--            <span class="category">{{this.$store.state.actionHelper.getCategoryName(note.categoryId)}}</span>-->
<!--            <span class="caret"></span>-->
<!--          </button>-->
<!--          <ul class="dropdown-menu">-->
<!--            <li @click="note.categoryId=0">-->
<!--              <a>工作</a>-->
<!--            </li>-->
<!--            <li @click="note.categoryId=1">-->
<!--              <a>生活</a>-->
<!--            </li>-->
<!--            <li @click="note.categoryId=2">-->
<!--              <a>学习</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        <ul class="tools">-->
<!--          <li @click="save" class="save"-->
<!--             ><i class="iconfont icon-save"></i></li>-->
<!--          <li @click="closeEditor" class="cancel"-->
<!--              ><i class="iconfont icon-close"></i></li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <textarea class="text-content form-control"-->
<!--                placeholder="内容"-->
<!--                v-model="note.content"></textarea>-->
<!--    </div>-->
  </div>
</template>

<script lang = "ts">
import {Vue,Component} from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import Category from '../model/CateEnum'
@Component
export default class NoteEdit extends Vue {
    
    //编辑框数组
    note: ItemData = new ItemData(Category.Life,"","")
    created(){
      const editNote = this.$store.state.updatingNote;
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
      }
      else {
      alert("对不起，输入错误~~！");
      }
     
    }
}
</script>
<style lang="scss" scoped>
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
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #FFffff;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    width: 50%;
    min-height: 100px;
    border-radius: 5px;
    @media screen and(max-width: 600px) {
      width: 98%;
    }
  }


</style>