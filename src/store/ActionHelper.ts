import DataHelper from './DataHelper';
import ItemData from '../model/ItemData';
import Category from '@/model/CateEnum';

class ActionHelper {
    // 负责数据处理
    dataHelper: DataHelper = new DataHelper('zNote');
    // 笔记数组
    noteList!: Array<ItemData>;
    constructor() {
        this.noteList = this.readData();
        console.log(this.noteList);
    }
    readData(): Array<ItemData> {
        const arr = this.dataHelper.readData();
        return arr;
    }

    getCategoryName(cateId: Category): string {
        const arrName = ['工作', '生活', '学习'];
        return arrName[cateId];
    }

    add(item: ItemData): number {
        const id = this.dataHelper.add(item);
        this.noteList = this.readData();
        return id;
    }

    edit(item: ItemData): void {
        this.dataHelper.update(item);
        this.noteList = this.readData();
    }

    remove(id: number): void {
        this.dataHelper.remove(id);
        this.noteList = this.readData();
    }
}

export default ActionHelper;
