import React from 'react'
import { Typography } from '@material-ui/core'

import RosettaCapstone from './Projects/RosettaCapstone'
import GraceShopper from './Projects/GraceShopper'

class Projects extends React.Component{
  render(){
    return (
      <div id='projects'>
        <Typography align='center' variant='h5'>Projects</Typography>
        <div>
          <RosettaCapstone />
          <GraceShopper />
        </div>
      </div>
    )
  }
}

export default Projects