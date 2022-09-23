import React from 'react'
import ReactDOM from 'react-dom'

function createCard(greeting, subheader){
  return (
    <React.Fragment>
      <h1>{greeting}</h1>
      <h2>{subheader}</h2>
    </React.Fragment>
  )
}

const element = (
  <div>
    {createCard("what are fragments?")}
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
