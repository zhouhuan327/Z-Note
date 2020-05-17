<template>
    <div>
        <span v-for="item in noteList" :key = item.id>
            {{item.title}} -
        </span>
    </div>
</template>

<script lang = "ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemData from '../model/itemData'
@Component
export default class ItemList extends Vue{
    noteList: Array<ItemData> = this.getNotes();


    getNotes(): Array<ItemData>{
        return this.$store.state.actionHelper.noteList;
    }
}
</script>