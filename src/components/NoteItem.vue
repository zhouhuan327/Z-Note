<template>
   <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{note.title}}</h5>
        <ul class="tools">
          <li class="edit"
              @click="showEdit"></li>
          <li class="delete"
              @click="doDel"></li>
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
import {Vue,Component,Prop} from 'vue-property-decorator'
import ItemList from './NoteList.vue'
@Component
export default class NoteItem extends Vue  {
    @Prop() note!:ItemList
}
</script>