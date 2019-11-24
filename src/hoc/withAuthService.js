import React from 'react'
import { AuthServiceConsumer } from 'components/molecules/AuthContext'

const withAuthService = (Wrapped) => (props) => (
  <AuthServiceConsumer>
    {({ currentUser, ...rest }) => (
      <Wrapped {...props} currentUser={currentUser} {...rest} />
    )}
  </AuthServiceConsumer>
)

export default withAuthService
