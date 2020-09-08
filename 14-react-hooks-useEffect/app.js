import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/SearchBar"
import getData from "./services/wikipedia" //1.2


const App = ()=>{
    return (
        <div className="container">
            <SearchBar />
        </div>
    )
}


















ReactDOM.render(
    <App />, document.querySelector('#root'))