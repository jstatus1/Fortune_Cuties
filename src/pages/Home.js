import React from 'react'
import CarouselDisplay from '../components/Carousel-Display'
import {cookieType} from '../Cookie Types/cookieType'


class Home extends React.Component
{
    render()
    {
        return (
            <React.Fragment>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Cutie Cookies</a>
                    </div>
                </nav>   
                <div>
                    <nav class="navbar navbar-dark bg-darkmp">    
                        <a class="navbar-brand" href="#">
                        <h6>Fortune Cuties</h6>
                        </a>         
                    </nav>
                    <CarouselDisplay CookieType={cookieType}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home