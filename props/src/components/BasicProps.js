import React from 'react'

const BasicProps = (props) => {
  return (
    <div>
      <p>Name: {props.name} Age: {props.age}</p>

      {/*<h1>Student: {props.isStudent}</h1> */}
    </div>
  )
}

export default BasicProps
