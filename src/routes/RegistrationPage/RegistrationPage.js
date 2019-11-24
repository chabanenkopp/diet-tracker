import React, { Component } from 'react'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { fontWeights } from 'Theme'
import Button from 'components/atoms/Button'
import NavLink from 'components/atoms/NavLink'
import { pxToRem } from 'helpers'
import { ROUTES } from 'constants/constants'
import RegistrationForm from './RegistrationForm'
import ModalRegistration from './RegistrationForm/ModalRegistration'

const { LOGIN } = ROUTES

class RegistrationPage extends Component {
  state = {
    isModalOpen: false,
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
            <RegistrationForm
              isModalOpen={isModalOpen}
              handleToggleModal={this.handleToggleModal}
            />
            <Flex justifyContent="space-between" alignItems="center" mt="m">
              <Text fontSize={['xs', 's', 's']}>
                Already have an account? Log in!
              </Text>
              <NavLink to={`/${LOGIN}`}>
                <Button.Filled
                  fontWeight={fontWeights.bold}
                  fontSize={['xs', 's', 's']}
                  mb="m"
                  maxWidth="m"
                >
                  GO TO LOGIN
                </Button.Filled>
              </NavLink>
            </Flex>
          </Box>
        </Flex>
        <ModalRegistration
          onClose={this.handleToggleModal}
          isModalOpen={isModalOpen}
        />
      </React.Fragment>
    )
  }
}

export default RegistrationPage
