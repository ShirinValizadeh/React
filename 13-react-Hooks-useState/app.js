import React from "react"
import ReactDOM from "react-dom"
import Accordion from "./components/Accordion"


//1
const items = [
    {
        title:'what is react',
        content:'react is frontend java script framework'
    },
    {
        title:'what is react?',
        content:'is a library'
    },
    {
        title:'how use react?',
        content:'use react by creating Components'
    }
]



const App = () =>{
    return (
        <div className="container">
            {/* 1.1 */}
            <Accordion items={items} />
     </div>
    )
}



ReactDOM.render(
    <App />, document.querySelector('#root'))