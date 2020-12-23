import react from 'react'
import axios from 'axios'

//Grabs Quote From the below api

const options = {
    method: 'GET',
    url: 'https://official-joke-api.appspot.com/random_joke'
  };

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


class QuoteBox extends react.Component 
  {
    state = 
    {
        setup: null,
        punchline: null,
        lottoNum: "",
        errorMessage: null,
        showPunchline: false
    }

    generateRandomLotto = () => 
    {
        for(let i = 0; i < 10; i++)
        {
            this.setState({lottNum:this.state.lottoNum + getRandomInt(100) + " "})
        }
        
    }

    componentDidMount()
    {
        axios.request(options).then( (response)=> {
        this.setState({setup: response.data.setup, punchline: response.data.punchline})
        }).catch(function (error) {
        this.setState({errorMessage: error})
        });
    }

    

    render() {
        if(this.state.punchline && this.state.setup)
          return(<div>
            <h1>{this.state.setup}</h1>
            <button type="button" class="btn btn-dark" onClick={()=>{this.setState({showPunchline:!this.state.showPunchline})}}>
                {this.state.showPunchline?<h3>{this.state.punchline}</h3>:<h3>Reveal Punchline</h3>} 
            </button>
            
            
          </div>)
        else if(!this.state.punchline && !this.state.setup && !this.errorMessage)
          return ( 
          <div>
              <h1>Loading Fortune.....</h1>
        </div>)
      
      }

  }

  export default QuoteBox;