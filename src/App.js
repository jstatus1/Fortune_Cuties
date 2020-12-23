import react from 'react'
import Routes from './routes'
import Navbar from './components/NavBar'


class App extends react.Component 
{

  render() {
      return(

      <div>
        <Navbar/>
       <Routes/>
      </div>
      )
  
  }
}

export default App;
