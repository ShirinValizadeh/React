import React from "react"


class ShowImgs extends React.Component{
    render(){
        console.log(this.props.images);
        let imgsElements = this.props.images.map(img=>{
            return (
                //as key you can use idx or id from databace
                 // what you want to reapet muss be here
                     <img key={img.id}  src={img.previewURL} />
           
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