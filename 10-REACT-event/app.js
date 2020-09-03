import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/SearchBar"
import Oclock from "./components/Oclock"
import getImages from "./services/pixabay"
import ShowImgs from "./components/ShowImgs"
import Btn from "./components/Btn"

class App extends React.Component {
    constructor(props) {
        super(props)
        //component refrensess muss be in constructore
        this.spinnerRef = React.createRef()  //3.2   blaspinnerRef / createRef() focus();
        this.state = { totalImgs: null, imgsHits: [] , searchWord:null , color:null}
    }
                                    //5
    search = (searchWord, color , pageNumber) => {
        //current will search for REF > 
        this.spinnerRef.current.classList.add('active') //3.2
        // console.log(color); // console.log(searchWord);  //! print value 1.3
        //search process
        getImages(searchWord, color , pageNumber).then(data => {
            this.spinnerRef.current.classList.remove('active') //3.2
            //set state take time 3 we need REF 3.1
            this.setState({ 
                totalImgs: data.total,
                 imgsHits: [...data.hits],
                searchWord:searchWord,
                color:color
                 })

        }).catch(err => {
            this.spinnerRef.current.classList.remove('active') //3.2
            console.log(err);
        })
    }

    //  function to go to next page 5.1
    goToPage = (num) => {
        this.search(this.state.searchWord , this.state.color , num)
    }

    render() {
        /*  let obj = {text="Enter your search key",samthing = "this is"  } */
        return (
            <div className='ui segment'>
                <Oclock />
                {/* here you can pass object or text or function */}
                <SearchBar text="enter search word" runSearch={this.search} />
                {/* to check if */}
                {this.state.totalImgs != null ? "Found: " + this.state.totalImgs + " Images" : ""}
                {/* {this.state.totalImgs != null ?  <Btn /> : '' }  5.1    or*/}
                <Btn totalImage={this.state.totalImgs} runpage = {this.goToPage} />
                <ShowImgs images={this.state.imgsHits} />

                {/* loader  3.1*/}
                <div ref={this.spinnerRef} className="ui  dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                <p></p>

            </div>
        )
    }
}



ReactDOM.render(
    <App />, document.querySelector('#root'))