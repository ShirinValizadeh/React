
import { Article, Category } from './modules/classes.js'
import validator from 'validator';
//const { check, validationResult } = require('express-validator');

document.querySelector('#submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('#titleInp').value
    const category = document.querySelector('#categorySelect option:checked').value
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
            categoryObj = new Category('no category')
            break;
    }
    //title  !== ''   & min 2 , max 5
    //category !== ""
    //description !== "" & min 10  , max 1000

    let errMsg = "";
    if (validator.isEmpty(title)) {
        errMsg = " title schuld not be empty \n"
    }
    if (!validator.isLength(title, { min: 3, max: 50 })) {
        errMsg += "title lenght should be between 2 and 50"
    }

    if (validator.isEmpty(category)) {
        errMsg += " category schuld not be empty \n"
    }
    if (validator.isEmpty(description)) {
        errMsg += " description schuld not be empty \n"
    }
    if (!validator.isLength(description, { min: 10, max: 1000 })) {
        errMsg += "description lenght should be between 10 and 1000"
    }
    if (!errMsg) {

        //send article data to backend using fetch
        postData('/', { title, category, description }).then(data => {
            if (data.status === 200) {
                const container = document.querySelector('#container')
                const article = new Article(title, description, categoryObj)
                article.render(container)
            }

        }).catch(err => {
            console.log(err);
        })

    } else {
        alert(errMsg)
    }





})


async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

//console.log(sayHello());