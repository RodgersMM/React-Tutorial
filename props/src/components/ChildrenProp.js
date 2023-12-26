import React from 'react'

const ChildrenProp = (props) => {
  return (
    <div>
      {/*props.children dont accept any properties */}
        {props.children}
    </div>
  )
}

export default ChildrenProp
