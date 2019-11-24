import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import firebase from 'database'

const { Provider, Consumer: AuthServiceConsumer } = createContext()

export { Provider, AuthServiceConsumer }

class AuthServiceProvider extends Component {
  state = {
    currentUser: false,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) =>
      this.setState({
        currentUser: user,
      })
    )
  }

  render() {
    const { children } = this.props
    const { currentUser } = this.state
    return (
      <Provider
        value={{
          currentUser,
          destroySession: () =>
            this.setState({
              currentUser: null,
            }),
        }}
      >
        {children}
      </Provider>
    )
  }
}

AuthServiceProvider.propTypes = {
  children: PropTypes.any,
}

export default AuthServiceProvider
