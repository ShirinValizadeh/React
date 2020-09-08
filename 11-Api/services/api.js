
const getImages = (keyWord ) => {
    return new Promise((resolve, reject) => {

        const url = 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency' +
            '&query=' + keyWord 
       

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
