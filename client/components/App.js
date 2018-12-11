import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './Main'
import Projects from './Projects'

class App extends React.Component{
  render(){ 
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </Router>
    )
  }
}

export default App