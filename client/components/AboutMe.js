import React from 'react'
import { Typography, Avatar } from '@material-ui/core'

class AboutMe extends React.Component{
  render(){
    return (
      <div id='aboutMeText'>
        <Typography align='center' variant='h4' className='header'>Harry Chen</Typography>
        <Typography align='center' variant='body1' className='header'> 
          I am a Fullstack Engineer, avid biker, and eSports enthusiast. 
          I love playing around with new technologies and APIs. 
          I am excited to immerse myself into the New York tech scene.
        </Typography>
        <Typography align='center' variant='body1'> 
          Core Stack: Node, Express, React, Postgres, Sequelize
        </Typography>
        <div id='linksContainer'>
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

module.exports = AboutMe