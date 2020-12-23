import react from 'react'

//QuoteBox
import QuoteBox from './QuoteBox'


class PlainCookie extends react.Component
{
    biteSound = new Audio(this.props.CookieType.Sound.default)
    
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
                    this.setState({src:this.props.CookieType.TwoThirds.default})
                    break;
                case 4: 
                    this.setState({src:this.props.CookieType.Half.default})
                    break;
                case 6: 
                    this.setState({src:this.props.CookieType.OneThird.default})
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