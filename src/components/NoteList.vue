<template>
    <div class="container">
       <NoteItem v-for="item in noteList" :key="item.id" :note="item" />
    </div>
</template>

<script lang = "ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import ItemData from '../model/itemData'
import NoteItem from '@/components/NoteItem.vue'
@Component({
   components:{
       NoteItem
   }
})
export default class NoteList extends Vue{
    noteList: Array<ItemData> = this.$store.state.actionHelper.noteList;
    watchObj = this.$store.state.actionHelper.noteList;
    
    @Watch('watchObj',{ immediate: false, deep: true })
    getList(newVal: Array<ItemData>,oldVal: Array<ItemData>){
        console.log("newVal", newVal, "oldVal", oldVal)
    }
    
}
</script>