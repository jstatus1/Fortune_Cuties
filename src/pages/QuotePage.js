import React from 'react'
import QuoteBox from '../components/Content/QuoteBox'

class QuotePage extends React.Component 
{

  render() {
      return(
        <div className="cookieMan">
            <div className = "Quote_Box">
            <h1>Fortune:</h1>
                <QuoteBox/>
                <a class="btn btn-outline-secondary" href="/" role="button">Another Cutie?</a>
            </div>
        </div>
        
        )
  
  }
}

export default QuotePage