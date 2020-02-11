import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Competencies from './Competencies'
import Hello from './Hello'

export default (

    <Switch>
        <Route exact path='/hello' component={Hello}/>
        <Route exact path='/:id' component={Competencies}/>
    </Switch>

)