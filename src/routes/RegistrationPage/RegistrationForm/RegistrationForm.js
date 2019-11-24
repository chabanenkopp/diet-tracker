import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { theme, fontWeights, radius } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS, ERRORS } from 'constants/constants'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import Popup from 'components/atoms/Popup'
import withDataForm from 'hoc/withDataForm'

const INPUT_WIDTH = [pxToRem(350), pxToRem(400), pxToRem(460)]

const Label = styled.label`
  font-size: ${theme.fontSizes.s};
  font-weight: ${fontWeights.semi_bold};
  color: ${COLORS.DARK_SAPHIRE};
`

const Form = styled.form`
  box-shadow: 7px 3px 35px -20px rgba(0, 0, 0, 0.75);
  border-radius: ${radius.m};
  background-color: ${COLORS.WHITE};
`

const { EMAIL, PASSWORD } = {
  EMAIL: 'email',
  PASSWORD: 'password',
}

const { USER_ALREADY_IN_USE, UNKNOWN_ERROR, WEAK_PASSWORD } = ERRORS

const ERROR_TYPE = {
  [USER_ALREADY_IN_USE]: 'This user is already in use',
  [WEAK_PASSWORD]: 'This password is weak. Please, change it.',
  [UNKNOWN_ERROR]: 'Unknown error has occurred',
}

const WARNING_TEXT = 'You have to enter both email and password.'

const RegistrationForm = ({
  email,
  password,
  isEmailValid,
  isError,
  isWarningVisible,
  errorType,
  handleSubmitForm,
  handleInputChange,
  handleBlur,
}) => (
  <Box>
    <Text
      textAlign="center"
      fontSize="xl"
      fontWeight={fontWeights.semi_bold}
      mb="m"
    >
      Sign up for Diet Tracker
    </Text>
    <Flex alignItems="center" justifyContent="center">
      <Box>
        <Form onSubmit={handleSubmitForm}>
          <Box p={['10px', 'm', 'l']}>
            <Label>
              <Flex justifyContent="space-between">
                EMAIL ADDRESS
                {!isEmailValid && (
                  <Text fontSize="xs" color={COLORS.RED_ORANGE_JUICE}>
                    invalid email
                  </Text>
                )}
              </Flex>
              <Input
                onChange={handleInputChange}
                onBlur={() => handleBlur(email, EMAIL)}
                placeholder="Email Address"
                isValid={isEmailValid}
                value={email}
                type={EMAIL}
                name={EMAIL}
                autoComplete={EMAIL}
                width={INPUT_WIDTH}
                py="m"
                pl="m"
              />
            </Label>
            <Box mt="l">
              <Label>
                PASSWORD
                <Input
                  onChange={handleInputChange}
                  placeholder="Your Password"
                  value={password}
                  name={PASSWORD}
                  type={PASSWORD}
                  autoComplete={PASSWORD}
                  width={INPUT_WIDTH}
                  py="m"
                  pl="m"
                />
              </Label>
            </Box>
            <Flex flexDirection="column">
              <Button.Filled
                type="submit"
                mt="l"
                fontSize="m"
                height={pxToRem(60)}
              >
                REGISTER
              </Button.Filled>
            </Flex>
          </Box>
        </Form>
      </Box>
    </Flex>
    <Popup
      isVisible={isWarningVisible}
      errorMessage={isError ? ERROR_TYPE[errorType] : WARNING_TEXT}
    />
  </Box>
)

RegistrationForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isWarningVisible: PropTypes.bool.isRequired,
  errorType: PropTypes.string.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
}

export default withDataForm('register')(RegistrationForm)
