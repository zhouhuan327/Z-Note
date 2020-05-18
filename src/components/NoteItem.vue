<template>
   <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{note.title}}</h5>
        <ul class="tools">
          <li class="edit"
              @click="editNote"><i class="iconfont icon-edit"></i></li>
          <li class="delete"
              @click="deleteNote"><i class="iconfont icon-delete-materialco"></i></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{note.createTime}}</span>
        <span class="category">分类: {{$store.state.actionHelper.getCategoryName(note.categoryId) }}</span>
      </h6>
      <div class="content">
        <div class="text">{{note.content}}</div>
      </div>
    </div>
  </div>
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
}
</script>