<template>
    <div class="container">
       <NoteItem v-for="item in noteList" :key="item.id" :note="item" />
    </div>
</template>

<script lang = "ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import NoteItem from '@/components/NoteItem.vue'
@Component({
   components:{
       NoteItem
   }
})
export default class NoteList extends Vue{
    noteList: Array<ItemData> = this.$store.state.actionHelper.noteList;
    
    
}
</script>