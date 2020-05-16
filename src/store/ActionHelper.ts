import DataHelper from './DataHelper';
import ItemData from '@/model/itemData';
export default class ActionHelper {
    //负责数据处理
    dataHelper: DataHelper = new DataHelper('zNote', 'id');
    noteList: Array<ItemData>;
    constructor() {
        this.noteList = this.readData();
    }
    readData(): Array<ItemData> {
        const arr = this.dataHelper.readData();
        //obj转成Array<ItemData>
        let itemDataArray = arr.map(element => {
            let item: ItemData = new ItemData();
            item.id = element.id;
            item.categoryId = element.categoryId;
            item.title = element.title;
            item.content = element.content;
            item.createTime = element.createTime;
            return item;
        });
        return itemDataArray;
    }
}
