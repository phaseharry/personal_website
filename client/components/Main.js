import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import SidePop from './SidePop'

class Main extends React.Component{
  render(){ 
    return (
      <div className='appWrapper'> 
        <SidePop/>
        <Link to='/projects' id='projectLink'>
          <Typography align='center' variant='h6'>Projects</Typography>
        </Link>
      </div>
    )
  }
}

export default Main

