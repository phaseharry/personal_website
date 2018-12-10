import React from 'react'
import { Typography } from '@material-ui/core'

class AboutMe extends React.Component{
  render(){
    return (
      <div id='aboutMeText'>
        <Typography align='center' variant='h5'>Harry Chen</Typography>
        <Typography align='center' variant='body1'> 
          I am a Fullstack Engineer, avid biker, and Esports enthusiast. 
          I love playing around with new technologies and APIs. 
          I am excited to immerse myself into the New York tech scene 
          and looking forward to meeting great people.
        </Typography>
      </div>
    )
  }
}

module.exports = AboutMe