import React from "react"
import ReactDOM from "react-dom"
import Oclock from "./components/Oclock"
import ShowPosition from "./components/ShowPosition"


//* class component
class App extends React.Component{  //1
     
    componentDidUpdate(){
      //  console.log('componnent is updated');
    }
    componentWillUnmount(){
        console.log('componnent will deleted');
    }

    render(){   //1.1
        return(//1.2
            <div>
               <ShowPosition />
                 <Oclock />
            </div>
            
             )  
    }
}



ReactDOM.render(
    <App/>, document.querySelector('#root'))