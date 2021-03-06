/* eslint-disable max-len */
import React from 'react'

import DragPreview from './DragPreview'
import Target from './Target'

const DragAroundCSV = React.createClass({

  render() {

    return (
      <div><div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3>With Drag Preview</h3>
        <Target hideSourceOnDrag={true} />
        <DragPreview />
      </div></div>
    )
  }
})

export default DragAroundCSV
