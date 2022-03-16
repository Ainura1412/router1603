import { useEffect } from 'react'
import { useHistory, Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import EditProfile from './EditProfile'
import Order from './Order'

function Profile({ isLog }) {
    const history = useHistory()
    useEffect(() => {
        if (!isLog) {
            history.push("/")
        }

    }, [isLog, history])
    const { path, url } = useRouteMatch()

    return (
        <>
            this is my Profile
            <ol>
                <li><Link to={`${url}/EditProfile`}>Edit My Profile</Link>Edit My Profile</li>
                <li><Link to={`${url}/SeeMyOrder`}>Edit My Profile</Link>See My Profile</li>
            </ol>
            <Switch>
                <Route path={`${path}/EditProfile`} component={EditProfile} />
                <Route path={`${path}/SeeMyOrder`} component={Order} />
            </Switch>
        </>
    )
}
export default Profile