import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import SidePop from './SidePop'
import Projects from './Projects';

class Main extends React.Component{
  render(){ 
    return (
      <div className='appWrapper'> 
        <SidePop/>
        <Projects />
      </div>
    )
  }
}

export default Main

