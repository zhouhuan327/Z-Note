<template>
    <div>
<!--        <transition-group name="fade" class="note-list" mode="out-in">-->
            <NoteItem v-for="item in filterNotes" :key="item.id" :note="item" />
<!--        </transition-group>-->
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
    get filterNotes(){
        const cateId = this.$store.state.filterCateId;
        if(cateId === -1){
            return this.noteList
        }else{
            return this.noteList.filter((ele: ItemData) => ele.categoryId === cateId)
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .note-list{
        display: flex;
        justify-content:center;
        align-items: flex-start;
        flex-wrap: wrap;

    }
</style>