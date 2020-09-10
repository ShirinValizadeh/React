import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"

const PageOne = () => {
    return (
        <div>
            page One
            <br />
            <Link to="/pagetwo" >page two</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            page two
            <br />
            <Link to="/" >page one</Link>
        </div>
    )
}


const PageThree = () => {
    return (
        <div>
            page three
        </div>
    )
}




class App extends React.Component {
    render() {
        return (
        
               
                <BrowserRouter>
                <Navbar/>
                    <div>
                        
                        <Route path="/" exact component={PageOne} />
                        <Route path="/pagetwo" exact component={PageTwo} />
                        <Route path="/pagetwo/pagethree" component={PageThree} />

                    </div>
                </BrowserRouter>
         
         
        )
    }
}






ReactDOM.render(<App />, document.querySelector('#root'))