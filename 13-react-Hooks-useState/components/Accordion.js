import React, { useState } from "react"
// or const useState = React.useState


//  or {items}  insted of props
const Accordion = (props) => {
    //log props to see items 1.2
    console.log(props);


    //!3 hooks useState insted of  state = {index:null}
    const [index, setIndex] = useState(null)



    const onTitleClick = (itemIndex) => {//2
        // console.log( itemIndex+'title is clicked');
        //3.1 setIndex is methode(we make it in num 3) we can use to change(update) itemIndex
        setIndex(itemIndex)
    }






    const itemsElements = props
        .items
        .map((item, idx) => {
            return (
                <div key={idx} className="card">
                    <div className="card-header">
                        <h5 className="mb-0">
                            <button
                                //func will be run wenn is clicked 2.1  hooks
                                onClick={() => { onTitleClick(idx) }}
                                className="btn btn-link">
                                {item.title}
                            </button>
                        </h5>
                    </div>
                    {/* 3.2  */}
                    <div className={`collapse ${index === idx ? "show" : ''}`}>
                        <div className="card-body">
                            {item.content}
                        </div>
                    </div>
                </div>
            )
        })
    return (
        <div className="row">
            <div className="accordion">
                {itemsElements}
            </div>
        </div>
    )
}

export default Accordion