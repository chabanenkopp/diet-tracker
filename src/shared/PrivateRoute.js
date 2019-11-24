import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'
import withAuthService from 'hoc/withAuthService'
import { Flex } from 'components/atoms/Layout'
import loading from 'assets/images/loading-dots.svg'

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {
  if (currentUser === false)
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <img src={loading} alt="loading" />
      </Flex>
    )
  if (currentUser === null) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Redirect to={{ pathname: `/`, state: { from: props.location } }} />
        )}
      />
    )
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  currentUser: PropTypes.object,
}

export default withRouter(withAuthService(PrivateRoute))
