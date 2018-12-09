import React from 'react';
import { Avatar } from '@material-ui/core'

import AboutMe from './AboutMe'

class SidePop extends React.Component{
  render(){
    return (
      <div>
        <AboutMe />
          <div>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/harrychenhc/'>
              <Avatar className='icon' src='/public/linked.png'/>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/phaseharry'>
              <Avatar className='icon' src='/public/git.png'/>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@phaseharry'>
              <Avatar className='icon' src='/public/medium-icon-21.jpg'/>
            </a>
          </div>
      </div>
    )
  }
}

export default SidePop