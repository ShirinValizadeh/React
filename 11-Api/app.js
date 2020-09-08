import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/SearchBar"



class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchWord:null}
    }



    render(){
        return (
            <div className='ui segment'>
                <SearchBar text="enter search word" runSearch={this.search} />
            </div>
        )
    }
}




ReactDOM.render(
    <App />, document.querySelector('#root'))