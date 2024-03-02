// Write your JS code here
import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const getJwtToken = Cookies.get('jwt_token')
  if (!getJwtToken) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
