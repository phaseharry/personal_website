import React from 'react'
import { Typography } from '@material-ui/core'

class RosettaCapstone extends React.Component{
  render(){
    return (
      <div className='individual'>
        <div className='projectText'>
          <Typography align='center' variant='display1' className='projectHeading'>Rosetta Capstone</Typography>
          <Typography align='center' variant='body2' style={{paddingBottom: '20px'}}>
            Rosetta Capstone is an interactive learning platform with the goal of teaching English. 
            Students select their native language. 
            The teacher's audio stream will be translated and displayed in text form on the students' clients. 
            Each student will see the teacher's transcription in their own language, but hear the audio in English. 
            They can interact with other students in the built-in chat, where all other languages will be translated into their selected language.
          </Typography>
          <Typography align='center' variant='body2' style={{paddingBottom: '20px'}}>
            Rosetta Capstone was a team project. 
            For my part, I mainly worked on integrating a third-party API called SimpleWebRTC. 
            SimpleWebRTC is an abstraction of WebRTC and it alleviated the need for us to handle our own STUN and TURN server. 
            It was an integral part of our project as it handled our video and audio streaming, whose outputs was required as input for other APIs. 
            For example, the audio stream produced by SimpleWebRTC was fed into the Web Speech API for turning speech to text. 
            Watch our <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=dQR0uXQ13Rg&feature=youtu.be'>demo</a>
            &nbsp;or check it out <a target='_blank' rel='noopener noreferrer' href='https://rosetta-capstone.herokuapp.com/'>here</a>!
          </Typography>
        </div>
        <div className='projectMedia'>
          <Typography align='center' variant='display1'>
            Video will go here
          </Typography>
        </div>
      </div>
    )
  }
}
 
export default RosettaCapstone