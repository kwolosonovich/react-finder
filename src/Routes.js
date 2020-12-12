import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Dog from './Dog'
import ShowDogs from './ShowDogs'

function Routes({dogs}) {
    return (
        <Switch>
            <Route exact path="/dogs">
                <ShowDogs dogs={dogs} />
            </Route>
        </Switch>
    )
}

export default Routes;