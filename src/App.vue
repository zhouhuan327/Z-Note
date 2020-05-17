<template>
  <div id="app">
    <MenuBar />
    <NoteList />
    <NoteEdit v-if="$store.state.isShowEditor" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuBar from '@/components/MenuBar.vue'
import NoteList from '@/components/NoteList.vue'
import NoteEdit from '@/components/NoteEdit.vue'
@Component({
  components: {
    MenuBar,
    NoteList,
    NoteEdit
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
