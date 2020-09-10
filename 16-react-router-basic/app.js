import React , { useState } from "react"
import ReactDOM from "react-dom"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"



class App extends React.Component{
    
    render(){
        let currentPage = null;
        if (window.location.pathname === '/dist/index.html') {
            currentPage = <Home />
        }
        if (window.location.pathname === '/dist/conntact') {
            currentPage = <Conntact />
        }
        if (window.location.pathname === '/dist/about') {
            currentPage = <About />
        }
        return(
            <div>
                {currentPage}
            </div>
        )
    }
}



class Home extends React.Component{
    render(){
        return(
            <div>
                home
                <br/>
            <a href="/dist/index.html">contact </a>
            <br/>
            <Button color="Danger" >danger</Button>
            </div>
        )
    }
}






class Conntact extends React.Component{
    render(){
        return(
            <div>contact</div>
        )
    }
}


class About extends React.Component{
    render(){
        return(
            <div>about</div>
        )
    }
}


ReactDOM.render(<App/> , document.querySelector('#root'))