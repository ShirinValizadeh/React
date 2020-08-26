class Article {
    constructor(title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category
    }
    render(container) {
        const titleElement = document.createElement('h2')
        titleElement.innerText = this.title

        const CategoryElement = document.createElement('h4')
        CategoryElement.innerText = this.category.name;

        const descriptionElement = document.createElement('p')
        descriptionElement.innerText = this.description

        container.append(titleElement)
        container.append(CategoryElement)
        container.append(CategoryElement)

    }
}

class Category {
    constructor(categoryName) {
        this.name = categoryName
    }
    static News() {
        return new Category('News')
    }
    static Sport() {
        return new Category('Sport')
    }
    static Politics() {
        return new Category('Politics')
    }
    static Beauty() {
        return new Category('Beauty')
    }
}

document.querySelector('#submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('#titleInp').value
    const category = document.querySelector('#categorySelect option:checked').innerText
    const description = document.querySelector('#descriptionTxt').value
    let categoryObj;
    switch (category) {
        case 'news':
            categoryObj = Category.News()
            break;
        case 'sport':
            categoryObj = Category.Sport()
            break;
        case 'politics':
            categoryObj = Category.Politics()
            break;
        case 'beauty':
            categoryObj = Category.Beauty()
            break;
        default:
            categoryObj = new Category ('no category')
            break;
    }

    const container = document.querySelector('#container')
    const article = new Article(title , description , categoryObj)
    article.render(container)
})