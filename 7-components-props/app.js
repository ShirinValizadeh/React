import React from "react";
import ReactDOM from "react-dom"


//* componnent
const App = ()=>{
    //return <div>hi</div>
    const text = 'enter your name'
    return (
        <div>
            <label className="lable" htmlFor="name">{text}</label>
            <input type="text" id="name" style={{backgroundColor:'blue' , color: 'wheat' }}/>
        </div>
    )


}




//* class component
/* class App extends React.Component{
    render(){
        return <h1>hi </h1>
    }
} */






ReactDOM.render(<App /> , document.querySelector('#container'))