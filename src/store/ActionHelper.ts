import DataHelper from './DataHelper';
import ItemData from '../model/ItemData';
import Category from '@/model/CateEnum';

class ActionHelper {
    // 负责数据处理
    dataHelper: DataHelper = new DataHelper('zNote');
    // 笔记数组
    noteList!: Array<ItemData>;
    constructor() {
        this.noteList = this.dataHelper.readData();
        console.log(this.noteList);
    }

    getCategoryName(cateId: Category): string {

        return Category[cateId];
    }

    add(item: ItemData): number {
        const id = this.getNewId(this.noteList);
        item.id = id;
        this.noteList.push(item);
        this.dataHelper.saveData(this.noteList);
        return id;
    }

    update(item: ItemData): void {
        const editItem: ItemData | undefined = this.noteList.find(ele => ele.id === item.id);
        if (editItem) {
            editItem.categoryId = item.categoryId;
            editItem.title = item.title;
            editItem.content = item.content;
            this.dataHelper.saveData(this.noteList);
        }
    }

    remove(id: number): void {
        const index = this.noteList.findIndex(ele => ele.id === id);
        if (index > -1) {
            this.noteList.splice(index, 1);
            this.dataHelper.saveData(this.noteList);
        }
    }
    getNewId(data: Array<ItemData>): number {
        const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        return newId;
    }
}

export default ActionHelper;
