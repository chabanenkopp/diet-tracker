import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link as ReactLink } from 'react-router-dom'
import styled from 'styled-components'
import firebase from 'database'
import { fontWeights, getTransition } from 'Theme'
import { COLORS, ROUTES } from 'constants/constants'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import ChangeColor from 'components/atoms/ChangeFontColorByPathName'
import Link from 'components/atoms/Link'
import withAuthService from 'hoc/withAuthService'
import compose from 'utils'

const { LOGIN, REGISTER, DASHBOARD } = ROUTES

const MobileMenuContainer = styled(Box)`
  background-color: ${COLORS.WHITE};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  will-change: transform;
  overflow-y: auto;
  opacity: 0;
  transition: ${getTransition('transform')}, ${getTransition('opacity')};
  ${({ isVisible }) =>
    isVisible
      ? 'transform: translateX(0%); opacity: 1'
      : 'transform: translateX(100%); opacity: 0'};
`

const MobileMenu = ({
  isVisible,
  onClick,
  pathName,
  destroySession,
  history,
}) => {
  const handleLogout = () => {
    firebase.auth().signOut()
    destroySession()
    history.push(`/${LOGIN}`)
  }
  return (
    <React.Fragment>
      <MobileMenuContainer isVisible={isVisible}>
        <Box height="100%">
          <Flex flexDirection="column" pt="xl" px="m">
            <Box pt={pxToRem(50)}>
              <Link
                to={DASHBOARD}
                onClick={() => onClick()}
                as={ReactLink}
                fontSize="xxxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                <ChangeColor pathName={pathName} targetPath={DASHBOARD}>
                  HOME
                </ChangeColor>
              </Link>
            </Box>
            <Box pt={pxToRem(50)}>
              <Link
                to={REGISTER}
                onClick={() => onClick()}
                as={ReactLink}
                fontSize="xxxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                <ChangeColor pathName={pathName} targetPath={REGISTER}>
                  REGISTER
                </ChangeColor>
              </Link>
            </Box>
            <Box pt={pxToRem(50)}>
              <Text
                onClick={() => {
                  handleLogout()
                  onClick()
                }}
                fontSize="xxxl"
                fontWeight={`${fontWeights.bold} !important`}
                px="l"
                py="m"
              >
                LOGOUT
              </Text>
            </Box>
          </Flex>
        </Box>
      </MobileMenuContainer>
    </React.Fragment>
  )
}

MobileMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  pathName: PropTypes.string,
  destroySession: PropTypes.func,
  onClick: PropTypes.func,
  history: PropTypes.object,
}

export default compose(
  withRouter,
  withAuthService
)(MobileMenu)
