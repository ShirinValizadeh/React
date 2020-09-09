import React, { useState, useEffect, useRef } from "react"



const SearchBar = (props) => {

    const btnRef = useRef()

    const [searchWord, setSearchWord] = useState('')
    const [color, setColor] = useState(null)


    //*call wenn user write somthing in input
    const onSearchInpChange = (e) => {
        setSearchWord(e.target.value)
    }


    const onSeatchBtnClick = () => {
        props.runSearch(searchWord, color)
    }



    //color 
    const colorSelectChange = (e) => {   //!6
        setColor(e.target.value)
    }


    return (
        <div className="row">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" ref={btnRef} onClick={() => { onSeatchBtnClick() }} >Search</button>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                    value={searchWord}
                    onChange={(e) => { onSearchInpChange(e) }} />
            </div>


            <select onChange={(e) => { colorSelectChange(e) }} >
                <option value="" >choose color </option>
                <option value="red">red</option>
                <option value="lilac">lilac</option>
                <option value="pink">pink</option>

            </select>

        </div>
    )

}

export default SearchBar