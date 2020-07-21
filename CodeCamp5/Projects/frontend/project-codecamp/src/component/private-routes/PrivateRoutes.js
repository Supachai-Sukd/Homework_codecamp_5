import React from 'react'
import ConfigRoutes from '../../config/configRoutes'
import { Switch, Redirect, Route } from 'react-router-dom'

function PrivateRoutes(props) {
    const role = props.role || "guest"

    const allowedRouteUser = ConfigRoutes[role].allowedRoutes
    const redirectRouteUser = ConfigRoutes[role].redirectRoutes

    return (
        <Switch>

            { allowedRouteUser.map(route => 
            (
            <Route
                path={route.url}
                key={route.url}
                exact
               
            >
                <route.component setRole={props.setRole} />
            </Route>
            
            ))}
            
            
            <Redirect to={redirectRouteUser} />
        </Switch>
    )
}

export default PrivateRoutes
