import React from "react"



class SearchBar extends React.Component{
    state = {keyWord:null }

    onInputChange = (e) => {
        //console.log(e.target.value);
        // get value use state 
        this.setState({keyWord:e.target.value  }) //! take value from input 1.1
       
    }


    colorSelectChange =(e)=>{ //1.1
        console.log(e.target.value);
        this.setState({color:e.target.value  }) 
    }
    
    onFormSubmit = (e) => {
        e.preventDefault()
         //! arrow function will refer this.state line 12 to class not to onInputChange()
      //  console.log(this.state.keyWord);
      //* send data from child to father  app.js line 10
        this.props.runSearch(this.state.keyWord , this.state.color)  //! send value to parent 1.2


    }


    render(){
        return (
            <div className="ui segment" >
                <form  className= "ui form" onSubmit={this.onFormSubmit} >
                <div className="field" >
                <label>{this.props.text}</label>            
                <input type="text"  onChange={this.onInputChange } />
                </div>
                <div className="field" >
                <label>choose img color</label>            

                <select onChange={this.colorSelectChange } >
                    <option value="" >choose color </option>
                    <option value="red">red</option>
                    <option value="lilac">lilac</option>
                    <option value="pink">pink</option>

                </select>
                </div>
                </form>
             </div>
        )
    }
}


export default SearchBar