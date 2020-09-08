//* first step build URL  1
const getData = (keyWord)=>{  //!1
    console.log('wikipedia keyword', keyWord);
    const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=' 
    + keyWord
     // fetch  by defaut is GET
     return new Promise((resolve , reject)=>{
         fetch(url).then(response=>{
             if (response.status === 200) {
                 //convert data to obj
                 response.json().then(data=>{
                     resolve(data)
                 }).catch(err =>{
                     reject(err)
                 })
             }else{
                 reject(new Error ('can not get data. Response status is :' + response.status))
             }
         }).catch(err=>{
             reject(err)
         })
     })
}

export default getData