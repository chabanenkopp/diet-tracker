import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'constants/constants'
import { theme, space, radius } from 'Theme'
import firebase from 'database'
import googleIcon from 'assets/images/google-logo.svg'

const GoogleButtonContainer = styled(Flex)`
  align-items: center;
  background-color: ${COLORS.GREEN_LINE};
  border-radius: ${radius.m};
  transition: background-color 0.5s;
  cursor: pointer;
  :hover {
    background-color: ${COLORS.BUTTERSCOTCH};
  }
`
const GoogleIconWrapper = styled(Box)`
  border-right: 1px solid ${COLORS.WHITE};
`

const GoogleIcon = styled.img`
  display: block;
  margin: ${space.m};
`

const provider = new firebase.auth.GoogleAuthProvider()

const googleSignIn = () => {
  firebase.auth().useDeviceLanguage()
  firebase.auth().signInWithRedirect(provider)
}

const GoogleForm = () => (
  <GoogleButtonContainer bg={COLORS.GREEN_LINE} alignItems="center">
    <GoogleIconWrapper>
      <GoogleIcon src={googleIcon} />
    </GoogleIconWrapper>
    <Flex flexDirection="column" width="100%">
      <Box onClick={googleSignIn} fontSize="m">
        <Text
          textAlign="center"
          fontWeight={theme.fontWeights.bold}
          color={COLORS.WHITE}
        >
          Sign In With Google
        </Text>
      </Box>
    </Flex>
  </GoogleButtonContainer>
)

export default GoogleForm
