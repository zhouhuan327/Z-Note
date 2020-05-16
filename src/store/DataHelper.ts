export default class DataHelper {
    dataKey: string;
    primaryKey: string;
    constructor(dataKey: string, primayKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primayKey;
    }
    readData(): Array<any> {
        const str: string | null = localStorage.getItem(this.dataKey);
        let data: Array<any> = [];
        if (str) {
            data = JSON.parse(str);
        }
        return data;
    }
    saveData(arrayData: Array<Object>): void {
        const str = JSON.stringify(arrayData);
        localStorage.setItem(this.dataKey, str);
    }
    addData(dataStr: string): number {
        let data: Array<any> = this.readData();

        let newId = data.length > 0 ? data[data.length - 1][this.primaryKey] + 1 : 1;
        let obj: Object = {
            content: dataStr,
            [this.primaryKey]: newId,
        };
        data.push(obj);
        this.saveData(data);
        return newId;
    }
    removeData(primayKey: number): boolean {
        let data: Array<any> = this.readData();
        const index = data.findIndex(item => item[this.primaryKey] === primayKey);
        if (index > -1) {
            data.splice(index, 1);
            this.saveData(data);
            return true;
        }
        return false;
    }
}
