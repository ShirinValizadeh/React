import React from "react"


class ShowImgs extends React.Component {

    constructor(props) {
        super(props)
        this.ulRef = React.createRef() //!4
    }
    //check is scrolling
    checkScroll = () => {  //!3
        //console.log('i am checking scrolling');
        // console.log("window inner heigt" , window.innerHeight);
        //console.log( 'this is ul botton' , this.ulRef.current.getBoundingClientRect().bottom);
        //
        if (this.ulRef.current.getBoundingClientRect().bottom < window.innerHeight) {
            // console.log('end');
            this.props.runNext()  //!5.4
            document.removeEventListener('scroll', this.checkScroll)  //!5.5


        }
    }

    componentDidMount() { //!3.1
        document.addEventListener('scroll', this.checkScroll)
    }


    // IT WILL BE UPDATE AFTER EACH CHANGE
    componentDidUpdate() {   //5.5
        document.addEventListener('scroll', this.checkScroll)
        //!5.5

    }



    componentWillUnmount() {  //!3.3 
        // if we dont have any result scroll will be deleted too
        document.removeEventListener('scroll', this.checkScroll)
    }

    render() {
        const imgsElements = this.props.imgs.map((img, idx) => {
            return (
                <li key={idx} className="list-group-item">

                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">Photographer : {img.user}</h5>
                            <p className="font-italic text-muted mb-0 small">Tags : {img.tags}</p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <a href={img.largeImageURL} className="btn btn-primary" target="_blank" >show large img</a>
                                <ul className="list-inline small">
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                </ul>
                            </div>
                        </div><img src={img.previewURL} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
                    </div>
                </li>
            )
        })
        return (
            //4.1 ref
            <ul ref={this.ulRef} className="list-group shadow mb-3" >
                {/* <!-- list group item--> */}
                {imgsElements}
            </ul>
        )
    }
}

export default ShowImgs