<template>
    <div class="container">
       <NoteItem v-for="item in filterNotes()" :key="item.id" :note="item" />
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
    constructor(){
        super()
    }
    filterNotes(){
        const cateId = this.$store.state.filterCateId;
        if(cateId === -1){
            return this.noteList
        }else{
            return this.noteList.filter((ele: ItemData) => ele.categoryId === cateId)
        }
    }
    
}
</script>