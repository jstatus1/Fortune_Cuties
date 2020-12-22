import react from 'react'

//Cookie Images
import {cookieType} from './Cookie Types/cookieType'
import FullCookie from './Cookie Types/Images/FortuneCookie/FullCookie.png'
import Two_ThirdsCookie from './Cookie Types/Images/FortuneCookie/two_thirds.png'
import HalfCookie from './Cookie Types/Images/FortuneCookie/half.png'
import One_ThirdCookie from './Cookie Types/Images/FortuneCookie/one_third.png'
import biteMP3 from './Cookie Types/Sound/Bite.mp3'

//QuoteBox
import QuoteBox from './QuoteBox'


class PlainCookie extends react.Component
{
    biteSound = new Audio(biteMP3)
    
    state = {
        counter: 0,
        src: this.props.CookieType.FullImage.default
    }

    eatingCookie = () =>
    {
        this.biteSound.loop = false;
        this.biteSound.play();
        this.setState({counter:this.state.counter+1})
        switch(this.state.counter)
            {
                case 2:
                    this.setState({src:Two_ThirdsCookie})
                    break;
                case 4: 
                    this.setState({src:HalfCookie})
                    break;
                case 6: 
                    this.setState({src:One_ThirdCookie})
                    break;
                case 8:
                    this.setState({src:""})
                    break;
            }
    }

    refreshPage=()=>{ 
        window.location.reload(); 
    }



    render()
    {
        return(
            <div className = "cookieMan">
                {
                    (this.state.src === "")?
                    <div className = "Quote_Box">
                        <h1>Fortune:</h1>
                        <QuoteBox/>
                        <button type="button" onClick={ this.refreshPage }> Another Cutie? </button> 
                    </div>:
                    <>
                    <h1>{this.props.CookieType.Name}</h1>
                       <button className="cookieButton" onClick={this.eatingCookie}>
                            <img src={this.state.src} alt="Fortune Cookie Image Here" />
                        </button>
                    <h1>Eat (Click Me) Me!</h1>
                    </> 
                }
            </div>
        )
    }
} 

export default PlainCookie