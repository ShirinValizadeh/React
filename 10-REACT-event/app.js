import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/SearchBar"
import Oclock from "./components/Oclock"
import getImages from "./services/pixabay"
import ShowImgs from "./components/ShowImgs"


class App extends React.Component{
    state ={totalImgs:null , imgsHits:[]}
    search = (searchWord , color)=>{
        console.log(searchWord);  //! print value 1.3
        console.log(color);
        //search process
        getImages(searchWord , color).then(data=>{
            console.log(data);
            this.setState({totalImgs:data.total , imgsHits:[... data.hits]})
        }).catch(err =>{
            console.log(err);
        })
    }
    render(){
 /*        let obj = {
            text="Enter your search key",
            samthing = "this is"
        } */
        return (
            <div>
                <Oclock />
            {/* here you can pass object or text or function */}
                <SearchBar text="enter search word" runSearch={this.search} />
                {/* to check if */}
                 {this.state.totalImgs != null ? "Found: " + this.state.totalImgs + "Images" : ""}
                <ShowImgs images={this.state.imgsHits}/>
            </div>
        )
    }
}



ReactDOM.render(
    <App/>, document.querySelector('#root'))