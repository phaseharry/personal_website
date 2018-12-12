import React from 'react'

import RosettaCapstone from './Projects/RosettaCapstone'
import GraceShopper from './Projects/GraceShopper'

class Projects extends React.Component{
  render(){
    return (
      <div id='projects'>
        <RosettaCapstone />
        <GraceShopper />
      </div>
    )
  }
}

export default Projects