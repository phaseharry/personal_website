import React from 'react'

import SidePop from './SidePop'
import Projects from './Projects'

class App extends React.Component{
  render(){ 
    return (
      <div className='appWrapper'> 
        <SidePop/>
        <Projects/>
      </div>
    )
  }
}

export default App