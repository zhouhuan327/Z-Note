import Category from './CateEnum';
class ItemData {
    id: number;
    categoryId: Category;
    title: string;
    content: string;
    createTime: string;
    constructor(id = -1, categoryId: Category = -1, title = '', content = '') {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.getDate();
    }

    getDate(): string {
        const date = new Date(Date.now());
        const str = `${date.getFullYear()}-${date.getMonth() +
            1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        return str;
    }
}
export default ItemData;
