import React from "react"
import getPosition from "../services/getPosition"


class ShowPosition extends React.Component{

    constructor(props){   
        super(props)     
        this.state = {lat:null , errorMsg:null}     
    }
  
    //wenn we want to get data   //olways aut of constructor
    componentDidMount(){
        getPosition().then((position)=>{
             this.setState({ lat:position.coords.latitude})
        }).catch((error)=>{
            console.log(error);
              this.setState({ errorMsg:error.message})
        })
     }
    render(){
        //if lat === null & error === null >>> loading...
        // if lat != null & error === null >> latitude is :{this.state.lat}
        // if lat === null && error != null >> errormsg
        if (this.state.lat === null & this.state.errorMsg === null) {
            return (
                <div>
                      <div>LOADING ... </div> 
                </div>
            )
        }
        if (this.state.lat !== null & this.state.errorMsg === null) {
            return (
                <div>
                      <div>latitude is :{this.state.lat} </div> 
                </div>
            )
        }
        if (this.state.lat === null & this.state.errorMsg !== null) {
            return (
                <div>
                        <div>error : {this.state.errorMsg} </div>
                </div>
            )
        }

    }
}

export default ShowPosition
