import React from 'react'
import { Typography } from '@material-ui/core'

class GraceShopper extends React.Component{
  render(){
    return (
      <div className='individual'>
        <div className='projectText'>
          <Typography align='center' variant='display1' className='heading'>Fullstacks of Trash</Typography>
          <Typography align='center' variant='body2' className='paragraphPro' style={{paddingBottom: '20px'}}>
            One man's trash is another man's treasure.
          </Typography>
          <Typography align='center' variant='body2' style={{paddingBottom: '20px'}}>
            Fullstacks of Trash is an e-commerce platform made with the intention of selling TRASH. 
            Anonymous and logged-in users can add trash to their carts, remove if necessary, write reviews for products, and checkout their carts via payment.
          </Typography>
          <Typography align='center' variant='body2' className='paragraphPro'  style={{paddingBottom: '20px'}}>
            The project was built by a team of 4. 
            For my part, I touched both the backend as well as the frontend of the application. 
            I set up our database models and relationships, designed RESTful API routes, wrote React components, and integrated Stripe for payment processing.
            Check it out  <a target='_blank' rel='noopener noreferrer' href='https://fullstacks-of-trash-final.herokuapp.com/'>here</a>!
          </Typography>
        </div>
        <div className='projectMedia'>
          <img src='/public/graceshopper2.png' className='graceshopperImg'></img>
        </div>
      </div>
    )
  }
}

export default GraceShopper