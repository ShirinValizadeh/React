import React from "react"
import ReactDOM from "react-dom"
import Comment from "./components/Comment"
import ApprovalCard from "./components/ApprovalCard"

const App = () => {

  return (
    <div className="ui container comments " >
      <ApprovalCard>
        Hi I am card
        </ApprovalCard>

        <ApprovalCard> 
          <Comment text= "nice comment"  rate="3" starColor="red" />
          </ApprovalCard>
     
      <Comment text= "nice i like it" rate="5" starColor="blue"/>
      <Comment text= "not bad" rate="2" starColor="black"/>

    </div>
  )
}

ReactDOM.render(
  <App/>, document.querySelector('#root'))
