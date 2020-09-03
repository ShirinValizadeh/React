import React from "react"
import SingleImg from "./SingleImg" 

class ShowImgs extends React.Component{
    render(){
        console.log(this.props.images);
        let imgsElements = this.props.images.map((image , idx)=>{
            return (
                //as key you can use idx or id from databace
                 // what you want to reapet muss be here
                    // or  <img key={img.id}  src={img.previewURL} />  or show from singleImg 
                    <SingleImg key={idx} imageData={image} /> //4
           
            )
        })
        return(
            <div className="container" >
                {imgsElements}
            </div>
        )
    }
}



export default ShowImgs