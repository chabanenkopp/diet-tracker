import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { COLORS } from 'constants/constants'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'

const BorderBottom = styled(Flex)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(50)};
  border-radius: ${pxToRem(40)};
  ${({ targetPath, currentPath }) =>
    targetPath === currentPath ? `background-color: ${COLORS.WHITE};` : null}
`

const LinksContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 90%;
  height: ${pxToRem(50)};
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: ${pxToRem(40)};
  background-color: ${transparentize(0.05, COLORS.VISTA_BLUE)};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  max-width: 500px;
  margin-top: ${pxToRem(30)};
`

const ReactLink = styled(Link)`
  text-decoration: none;
`

const Container = styled(Box)`
  position: absolute;
  width: 100%;
  min-height: ${pxToRem(55)};
  z-index: 1;
`

const LinksWrapper = styled(Flex)`
  flex: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 2;
  height: ${pxToRem(90)};
  width: 100%;
`

const NavBar = ({ path }) => (
  <Container>
    <LinksWrapper>
      <LinksContainer>
        <BorderBottom targetPath="/dashboard" currentPath={path}>
          <ReactLink to="/dashboard">
            <Text
              fontSize="xl"
              fontWeight="semi_bold"
              color={path === '/dashboard' ? COLORS.BLACK : COLORS.WHITE}
              px="l"
              py="m"
            >
              Main
            </Text>
          </ReactLink>
        </BorderBottom>
        <BorderBottom targetPath="/clock" currentPath={path}>
          <ReactLink to="/clock">
            <Text
              fontSize="xl"
              fontWeight="semi_bold"
              color={path === '/clock' ? COLORS.BLACK : COLORS.WHITE}
              px="l"
              py="m"
            >
              Clock
            </Text>
          </ReactLink>
        </BorderBottom>
      </LinksContainer>
    </LinksWrapper>
  </Container>
)

NavBar.propTypes = {
  path: PropTypes.string.isRequired,
}

export default NavBar
