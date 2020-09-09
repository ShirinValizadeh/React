import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/SearchBar"
import getData from "./services/pixabay"
import ShowImgs from "./components/ShowImgs"

const App = () => {

  /*     const [results , setResuts] = useState([])
    const [serachWord , setSerachWord] = useState('')
    const [pageNum , setPageNum] = useState(1)
    const [perPage , setPerPage] = useState(4)
    const [color , setColor] = useState(null) */

  const defaultState = { //!2
    results: [],
    serachWord: "", //5.2
    pageNum: 1, //5.2
    perPage: 4, //5.2
    color: null, //6.3

  }
  const [myState,
    setMyState] = useState(defaultState)

  //function for serach word
  const search = (keyWord, color) => { //!1.1   6.4
    if (keyWord) {
      //call func from pixabay
      getData(keyWord, 4, 1, color).then(data => { //!1.2   //6.5
        console.log(data);
        setMyState({
          color: color,
          serachWord: keyWord,
          pageNum: 1,
          perPage: 4,
          results: [...data.hits]
        }) //!2.1   5.1   6.6
      })
    } else { //wenn you delete serach input result muss be deleted
     //!2.2
      setMyState({serachWord: '', pageNum: 1, perPage: 4, results: []})
    }
  }

  const goNext = () => { //!5
    getData(myState.serachWord, myState.perPage, myState.pageNum + 1, myState.color).then(data => { //5.2   //6.7
      setMyState({
        pageNum: myState.pageNum + 1,
        results: [
          ...myState.results,
          ...data.hits
        ],
        serachWord: myState.serachWord,
        perPage: myState.perPage

      })
    })
  }

  return (
    <div className="container">
      {/* pass search as prop here 1.3*/}
      <SearchBar runSearch={search}/> {/* to see imgs  2.2   5.3 */}
      {myState.results.length ? <ShowImgs imgs={myState.results} runNext={goNext}/> : ""}

    </div>
  )

}

ReactDOM.render(
  <App/>, document.querySelector('#root'))