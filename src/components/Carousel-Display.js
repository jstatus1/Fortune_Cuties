import react from 'react'
import PlainCookie from '../PlainCookie'


class CarouselDisplay extends react.Component 
{

    componentWillMount()
    {
       Object.keys(this.props.CookieType).map((key,index) => {
            <li data-bs-target="#carouselExampleDark" data-bs-slide-to={`$counter`}></li>
        })
  
    }

    render()
    {
        return (
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                   {Object.keys(this.props.CookieType).map((key,index) => {
                        
                        return index==0? <li data-bs-target="#carouselExampleDark" data-bs-slide-to={index} class="active"></li>:<li data-bs-target="#carouselExampleDark" data-bs-slide-to={index}></li>
                    })} 
                </ol>
                <div class="carousel-inner">
                    {Object.keys(this.props.CookieType).map((key,index) => {
                        return index == 0? 
                            (
                                <div class="carousel-item active">
                                    <PlainCookie CookieType ={this.props.CookieType[key]}/>
                                </div>
                            ):
                            (
                                <div class="carousel-item">
                                    <PlainCookie CookieType ={this.props.CookieType[key]}/>
                                </div>
                            )

                            
                    })} 
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



