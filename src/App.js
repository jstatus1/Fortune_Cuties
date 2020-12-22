import react from 'react'
import CarouselDisplay from './Carousel-Display'

import {cookieType} from './Cookie Types/cookieType'


class App extends react.Component 
{

  render() {
      return(
      <div className="App">
            <CarouselDisplay CookieType={cookieType}/>
            
      </div>)
  
  }
}

export default App;
