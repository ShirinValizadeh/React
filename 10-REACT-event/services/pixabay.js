// API   12000491-41fc68d8c365df909e022ceb6

const getImages = (keyWord , color) => {
    return new Promise((resolve, reject) => {

        const url = 'https://pixabay.com/api?key=12000491-41fc68d8c365df909e022ceb6' +
            '&q=' + keyWord + "&per_page=200" + "&colors=" + color

        fetch(url, {
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            }
        }).catch(err => {
            reject(err)
        })

    })


}


export default getImages

