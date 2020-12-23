import React from 'react'
import JokeBox from '../components/Content/JokeBox'

class LemonCutiePage extends React.Component 
{

  render() {
      return(
        <div className="cookieMan">
            <div className = "Quote_Box">
                <JokeBox/>
                <a class="btn btn-outline-secondary" href="/" role="button">Another Cutie?</a>
            </div>
        </div>
        
        )
  
  }
}

export default LemonCutiePage