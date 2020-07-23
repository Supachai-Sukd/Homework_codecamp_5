import React from 'react'
import ConfigurationRouters from '../../config/configRoutes'
import { Switch, Redirect, Route } from 'react-router-dom'

function PrivateRoutes(props) {
    const role = props.role || 'guest'

    const allowedRoutesUser = ConfigurationRouters[role].allowedRoutes
    const redirectRoutesUser = ConfigurationRouters[role].redirectRoutes

    return (
        <Switch>
            {allowedRoutesUser.map(route => (
                <Route
                    path={route.url}
                    key={route.url}
                    exact
                >
                    <route.component setRole={props.setRole} />
                </Route>
            )
            )}

            <Redirect to={redirectRoutesUser} />
        </Switch>
    )
}

export default PrivateRoutes
