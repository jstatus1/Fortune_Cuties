import react,{useState} from 'react'
import PlainCookie from './PlainCookie'

 
let indicators = null

class CarouselDisplay extends react.Component 
{

    componentWillMount()
    {
        // for (var key of Object.keys(this.props.CookieType)) 
        // {
        //     //console.log(key + '->' + this.props.CookieType[key].FullImage.default ) 
        //     if(counter == 0)
        //     {
        //         indicators = <li data-bs-target="#carouselExampleDark" data-bs-slide-to={`$counter`} class="active"></li>
        //     }else{
        //         indicators += <li data-bs-target="#carouselExampleDark" data-bs-slide-to={`$counter`}></li>
        //     }
        //     counter++
        // }

        indicators = Object.keys(this.props.CookieType).map((key,index) => {
            if(index == 0)
            {
                <li data-bs-target="#carouselExampleDark" data-bs-slide-to={index} class="active"></li>
            }else
            {
                <li data-bs-target="#carouselExampleDark" data-bs-slide-to={index}></li>
            }
        })

        console.log(indicators)

        
    }

    render()
    {
        return (
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                   {indicators} 
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



