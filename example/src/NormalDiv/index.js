/* eslint-disable max-len */
import React from 'react'
import Target from './Target'

const DragAroundNaive = React.createClass({
  render() {

    return (
      <div><div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3>Normal Div</h3>
        <Target hideSourceOnDrag={true} />
      </div></div>
    )
  }
})

export default DragAroundNaive
