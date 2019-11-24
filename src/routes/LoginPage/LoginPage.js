import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { fontWeights } from 'Theme'
import Button from 'components/atoms/Button'
import NavLink from 'components/atoms/NavLink'
import { pxToRem } from 'helpers'
import { ROUTES } from 'constants/constants'
import withAuthService from 'hoc/withAuthService'
import compose from 'utils'
import LoginForm from './LoginForm'
import ModalLogin from './LoginForm/ModalLogin'
import GoogleForm from './GoogleForm'

const { REGISTER, DASHBOARD } = ROUTES

class LoginPage extends Component {
  state = {
    isModalOpen: false,
  }

  componentDidMount() {
    const { currentUser, history } = this.props
    if (currentUser) history.push(`/${DASHBOARD}`)
  }

  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }))
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <React.Fragment>
        <Flex mt="xxl" alignItems="center" justifyContent="center">
          <Box width={[pxToRem(390), pxToRem(450), pxToRem(540)]}>
            <LoginForm
              isModalOpen={isModalOpen}
              handleToggleModal={this.handleToggleModal}
            />
            <Flex justifyContent="space-between" alignItems="center" mt="m">
              <Text fontSize={['xs', 's', 's']}>
                Dont have an account? Get registered!
              </Text>
              <NavLink to={`/${REGISTER}`}>
                <Button.Filled
                  fontWeight={fontWeights.bold}
                  fontSize={['xs', 's', 's']}
                  mb="m"
                  maxWidth="m"
                >
                  REGISTER
                </Button.Filled>
              </NavLink>
            </Flex>
            <Text textAlign="center" mb="l" fontSize="xl">
              OR
            </Text>
            <GoogleForm />
          </Box>
        </Flex>
        <ModalLogin
          onClose={this.handleToggleModal}
          isModalOpen={isModalOpen}
        />
      </React.Fragment>
    )
  }
}

LoginPage.propTypes = {
  currentUser: PropTypes.object,
  history: PropTypes.object,
}

export default compose(
  withRouter,
  withAuthService
)(LoginPage)
