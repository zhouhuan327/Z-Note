<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown"
         class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control"
               type="text"
               placeholder="标题"
               v-model="note.title" />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown">
            <span class="category">{{this.$store.state.actionHelper.getCategoryName(note.categoryId)}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="note.categoryId=0">
              <a>工作</a>
            </li>
            <li @click="note.categoryId=1">
              <a>生活</a>
            </li>
            <li @click="note.categoryId=2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save"
             >s</li>
          <li @click="closeEditor" class="cancel"
              >c</li>
        </ul>
      </div>
      <textarea class="text-content form-control"
                placeholder="内容"
                v-model="note.content"></textarea>
    </div>
  </div>
</template>

<script lang = "ts">
import {Vue,Component} from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import Category from '../model/CateEnum'
@Component
export default class NoteEdit extends Vue {
    //编辑框数组
    note: ItemData = new ItemData(Category.Life,"标题","内容")

    closeEditor(){
      this.$store.state.isShowEditor = false
    }
}
</script>