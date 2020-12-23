import React from 'react'
import {BrowserRouter , Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import FortuneCutiePage from './pages/FortuneCutiePage'
import LemonCutiePage from './pages/LemonCutiePage'
import PokeDexPage from './pages/PokeDexPage'

const RouterComponent = () => {
    return (
        <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/FortuneCutiePage" exact component={FortuneCutiePage} />
            <Route path="/LemonCutiePage" exact component={LemonCutiePage}/>
            <Route path="/PokeDexPage" exact component={PokeDexPage}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
}

export default RouterComponent;