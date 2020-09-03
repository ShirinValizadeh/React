import React from "react"


class SingleImg extends React.Component{//4.1    // 5.1
    constructor(props){  //5
        super(props)
        this.overalDivRef = React.createRef()
    }
    onThumbImgClick = ()=>{ //5.1
        this.overalDivRef.current.classList.add('active')
        //or write onclick line 23
       // or this.overalDivRef.current.addEventListener('click' , this.hidenThumImgClick)
    }
    hidenThumImgClick = ()=>{
        this.overalDivRef.current.classList.remove('active')

    }

    render(){
       return (
           <div>
                <img onClick={this.onThumbImgClick} src={this.props.imageData.previewURL} /> 
                <div onClick={this.hidenThumImgClick} ref={this.overalDivRef}  className="ui dimmer">
                <img onClick={(e)=>{e.stopPropagation()}} src={this.props.imageData.largeImageURL} /> 

                </div>
           </div>
       )
       

    }
}


export default SingleImg