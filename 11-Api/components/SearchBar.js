import React from "react"




class SearchBar extends React.Component{
    state = {keyWord:null }

    onInputChange = (e) => {

        this.setState({keyWord:e.target.value  }) //! take value from input 1.1
       
    }



    
    onFormSubmit = (e) => {
        e.preventDefault()

      if (this.state.keyWord) {
           this.props.runSearch(this.state.keyWord )  //! send value to parent 1.2
      }
       
    }


    render(){
        return (
            <div className="ui segment" >
                <form  className= "ui form" onSubmit={this.onFormSubmit} >
                <div className="field" >
                <label>{this.props.text}</label>            
                <input type="text"  onChange={this.onInputChange } />
                </div>
           
                <button className="ui green basic button">Search</button>
                </form>
             </div>
        )
    }
}


export default SearchBar