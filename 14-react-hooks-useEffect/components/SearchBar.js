import React, {useState, useEffect} from "react"
import getData from "../services/wikipedia"

const SearchBar = () => {

  const [searchWord,  setSearchWord] = useState('') //1.5  WARNING "value" cann not be null
  const [articles, setArticles] = useState([])  //2
       


  const onSearchInpChange = (e) => { //1.4
    // console.log(e.target.value);
    setSearchWord(e.target.value) //1.5.1
  }

  //***************hook useEffect()************** */
  /*     useEffect(() => {
        console.log('i will be called in first time and in every update');
    }) */

  /*     useEffect(() => {
        console.log('i am gonna be call only first time');
    }, []) */

  useEffect(() => {
    // !i am gonna be call for the first time and wenn "searchWord in the state is // change"
    // use set time out to wait for next charachter than send request
  const timmer = setTimeout(() => {
         if (searchWord) {
      //call what is inside wikipedia 1.6
      getData(searchWord).then(data => {
        console.log(data);
        //2.1 take data
        setArticles([...data.query.search])

      }).catch(err => {
        console.log(err);
      })
    }
   }, 1000);

   //!clean up function
   //clean up func wich gonna be invoked direktly before call same useEffect func for the second charachter
   return ()=>{
     console.log('clean up func wich gonna be invoked direktly before call same useEffect func for the second charachter');
    clearTimeout(timmer)
    }
  }, [searchWord])







// will be reapeted
  const articlesElements = articles.map(article =>{
      return (
        <div key={article.pageid} className="card">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          
      <p className="card-text">{article.snippet}</p>
          <a href={`https://en.wikipedia.org?curid=${article.pageid}`} target="_blank" className="btn btn-primary">Open in Wikipedia</a>
        </div>
      </div>
  
    
      )
  })



  return (
    <div className="row">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
        <input type="text" className="form-control" placeholder="Search here" //1.3
          onChange={(e) => {
          onSearchInpChange(e)
        }} //1.5.2
          value={searchWord}/>
      </div>
      <div className="col-sm-12">
        {articlesElements}
      </div>
    </div>
  )
}

export default SearchBar