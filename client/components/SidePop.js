import React from 'react';

import AboutMe from './AboutMe'

class SidePop extends React.Component{
  render(){
    return (
      <div id='aboutMeContainer'>
        <div className='headshotContainer'>
          <img id='headshot' src='/public/headshot.jpg'></img>
          <AboutMe />
        </div>
      </div>
    )
  }
}

export default SidePop