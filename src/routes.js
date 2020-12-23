import React from 'react'
import {BrowserRouter , Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import QuotePage from './pages/QuotePage'

const RouterComponent = () => {
    return (
        <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/FortuneCookieQuote" exact component={QuotePage} />
            
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
}

export default RouterComponent;