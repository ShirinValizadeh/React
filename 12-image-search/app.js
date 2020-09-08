import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/SearchBar"
import getData from "./services/pixabay"
import ShowImgs from "./components/ShowImgs"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {  //!2
            results:[] ,
            serachWord : "" , //5.2
            pageNum: 1,  //5.2
            perPage :4 ,     //5.2
            color :null,  //6.3

        }
    }
    //function for serach word
    search = (keyWord , color) =>{ //!1.1   6.4
        if (keyWord) {
            //call func from pixabay
            getData(keyWord,4,1 , color).then(data =>{  //!1.2   //6.5
                console.log(data);
                this.setState({ color:color , serachWord:keyWord, pageNum:1 , perPage:4 ,results:[  ...data.hits]}) //!2.1   5.1   6.6
            })
        }else{ //wenn you delete serach input result muss be deleted
            this.setState({results:[]}) //!2.2 
        }
    }

    //load new data
    goNext =()=>{  //!5
        getData(this.state.serachWord , this.state.perPage , this.state.pageNum +1 , this.state.color).then(data=>{  //5.2   //6.7
            this.setState({ pageNum:this.state.pageNum +1  ,results:[...this.state.results , ...data.hits]}) 

        })
    }
    render(){
        return (
            <div className="container">
                {/* pass search as prop here 1.3*/} 
               <SearchBar runSearch = {this.search} />
               {/* to see imgs  2.2   5.3 */}
               {this.state.results.length ? <ShowImgs imgs={this.state.results} runNext={this.goNext} /> : ""}
               
            </div>
        )
    }
}



ReactDOM.render(
    <App />, document.querySelector('#root'))