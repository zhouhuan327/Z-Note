import Category from './CateEnum';
class ItemData {
    id = -1;
    categoryId: number;
    title: string;
    content: string;
    createTime: string;
    constructor(categoryId = Category.Life, title = '', content = '') {
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.getDate();
    }

    getDate(): string {
        const date = new Date(Date.now());
        return `${date.getFullYear()}-${date.getMonth() +
            1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    }
}
export default ItemData;
