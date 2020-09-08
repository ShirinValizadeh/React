import React from "react"

class SearchBar extends React.Component {
    state = {
        searchWord: ''
    }

    //call wenn user write somthing in input
    onSearchInpChange = (e) => {
        this.setState({ searchWord: e.target.value })
    }

    /*   //call after rendering
    componentDidUpdate(){
              console.log(this.state.searchWord);
    } */

    //runSearch() come from app.js take one promiter
    onSearchBtnClick = () => { //!1.4
        this.props.runSearch(this.state.searchWord, this.state.color) //!1.5
    }


    //color
    colorSelectChange =(e)=>{ 
        console.log(e.target.value);
        this.setState({color:e.target.value  }) 
    }
    

    render() {
        return (
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.onSearchBtnClick}>Search</button>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                        value={this.state.searchWord}
                        onChange={this.onSearchInpChange} />
                </div>


                <select onChange={this.colorSelectChange} >
                    <option value="" >choose color </option>
                    <option value="red">red</option>
                    <option value="lilac">lilac</option>
                    <option value="pink">pink</option>

                </select>

            </div>
        )
    }
}

export default SearchBar