import React from "react"



class Oclock extends React.Component{

 // or   state = {time:null}
    constructor(props){    //0r
        super(props)     
        this.state = { time:null}       
    }

    componentDidMount(){
                //console.log(new Date().toLocaleTimeString());
                setInterval(() => {
                    this.setState({ time: new Date().toLocaleTimeString()})
                }, 1000);
    }

    render(){   
        return   <div>now the Time is :{this.state.time} </div>
   
    }
}

 // or export {Oclock}
export default Oclock