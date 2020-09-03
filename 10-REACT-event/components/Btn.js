import React from "react"

class Btn extends React.Component {
    constructor(){
        super()
        this.state={pageNumber:1}
    }

    nextPage = ()=>{ //5
           this.props.runpage(this.state.pageNumber ++)
        this.setState({pageNumber: this.state.pageNumber++})
     
    }

    render() {
        if (this.props.totalImage) {
            return (
                <div className="ui floated menu">
                    <a className="icon item">
                        <i className="left chevron icon"></i>
                    </a>
                    <input className="btnInpText" type="number" value={this.state.pageNumber}  />
                    <a onClick={this.nextPage} className="icon item">
                        <i className="right chevron icon"></i>
                    </a>
                </div>
            )
        } else {
            return <div> </div>
        }



    }
}

export default Btn