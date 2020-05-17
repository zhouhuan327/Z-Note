import ItemData from '../model/ItemData';
class DataHelper {
    dataKey: string;
    constructor(dataKey: string) {
        this.dataKey = dataKey;
    }
    public readData(): Array<ItemData> {
        const str: string | null = localStorage.getItem(this.dataKey);
        let data: Array<ItemData> = [];
        if (str) {
            data = JSON.parse(str);
        }
        return data;
    }
    public saveData(arrayData: Array<ItemData>): void {
        const str = JSON.stringify(arrayData);
        localStorage.setItem(this.dataKey, str);
    }
}
export default DataHelper;
