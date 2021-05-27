import react from 'react'
import axios from 'axios'

//Grabs Quote From the below api

const options = {
    method: 'GET',
    url: 'http://api.quotable.io/random'
  };

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


class QuoteBox extends react.Component 
  {
    state = 
    {
        quote: null,
        author: null,
        lottoNum: "",
        errorMessage: null
    }


    componentDidMount()
    {
        axios.request(options).then( (response)=> {
        this.setState({quote: response.data.content, author: response.data.author})
        }).catch(function (error) {
        this.setState({errorMessage: error})
        });

    }

    

    render() {
        if(this.state.quote && this.state.author)
          return(<div>
            <h1>{this.state.quote}</h1>
            <h3>{this.state.author}</h3>
            <h2>Lotto Number: {this.state.lottoNum}</h2>
            
          </div>)
        else if(!this.state.quote && !this.state.author && !this.errorMessage)
          return ( 
          <div>
              <h1>Loading Fortune.....</h1>
        </div>)
      
      }

  }

  export default QuoteBox;