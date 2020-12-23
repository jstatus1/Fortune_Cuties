import react from 'react'
import CarouselDisplay from './Carousel-Display'

import {cookieType} from './Cookie Types/cookieType'


class App extends react.Component 
{

  render() {
      return(
      <react.Fragment>
        <nav class="navbar navbar-dark bg-darkmp">
          
            <a class="navbar-brand" href="#">
              <h6>Fortune Cuties</h6>
            </a>
          
        </nav>
      
        <div className="App">
          
              <CarouselDisplay CookieType={cookieType}/>
              
        </div>
      </react.Fragment>
      )
  
  }
}

export default App;
