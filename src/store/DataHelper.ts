import ItemData from '../model/itemData';
class DataHelper {
    dataKey: string;
    constructor(dataKey: string) {
        this.dataKey = dataKey;
    }
    readData(): Array<ItemData> {
        const str: string | null = localStorage.getItem(this.dataKey);
        let data: Array<ItemData> = [];
        if (str) {
            data = JSON.parse(str);
        }
        return data;
    }
    saveData(arrayData: Array<ItemData>): void {
        const str = JSON.stringify(arrayData);
        localStorage.setItem(this.dataKey, str);
    }
    getNewId(data: Array<ItemData>): number {
        const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        return newId;
    }
    add(item: ItemData): void {
        const array = this.readData();
        const id = this.getNewId(array);
        item.id = id;
        array.push(item);
        this.saveData(array);
    }
    update(item: ItemData): void {
        const array = this.readData();
        const index = array.findIndex(ele => ele.id === item.id);
        array[index] = item;
        this.saveData(array);
    }
    remove(id: number): void {
        const array: Array<ItemData> = this.readData();
        const index = array.findIndex(item => item.id === id);
        if (index > -1) {
            array.splice(index, 1);
            this.saveData(array);
        }
    }
}
export default DataHelper;
