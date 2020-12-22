import react,{useState} from 'react'
import PlainCookie from './PlainCookie'

 
class CarouselDisplay extends react.Component 
{
    render()
    {
        return (
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <PlainCookie CookieType ={this.props.CookieType.FortuneCookie}/>
                    </div>
                    <div class="carousel-item">
                        <PlainCookie CookieType ={this.props.CookieType.PokemonCookie}/>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
            
        )
    }
}

export default CarouselDisplay



