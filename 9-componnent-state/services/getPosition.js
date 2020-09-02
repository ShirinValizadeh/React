const getPosition = ()=>{
    return new Promise ((resolve , reject)=>{
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
               // console.log(position);            
               resolve(position)
            } ,
             (err)=>{
                // console.log(err);          
                reject(err)
             })   
    })
}

export default getPosition