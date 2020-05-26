<template>
    <div class="note-list">
       <NoteItem v-for="item in filterNotes()" :key="item.id" :note="item" />
    </div>
</template>

<script lang = "ts">
import { Component, Vue } from 'vue-property-decorator'
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
<style lang="scss">
    .note-list{
        display: flex;
        justify-content:start;
        align-items: center;
        flex-wrap: wrap;
    }
</style>