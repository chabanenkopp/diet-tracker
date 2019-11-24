import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HamburgerButton } from 'react-hamburger-button'
import { COLORS } from 'constants/constants'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'

const HeaderFixedBox = styled(Flex)`
  z-index: 1;
`

const HamburgerContainer = styled(Box)`
  position: fixed;
  z-index: 1;
  right: 0;
`

const getHamColour = (isVisible, path) => {
  if (isVisible) return COLORS.BLACK
  return path === '/dashboard' ? COLORS.WHITE : COLORS.BLACK
}

const Header = ({
  isVisible,
  onMobileMenuButtonClick,
  email,
  mobileMenuComp: MobileMenuComp,
  path,
}) => {
  const hamColour = getHamColour(isVisible, path)
  return (
    <Box minHeight={pxToRem(80)} zIndex="1">
      <HeaderFixedBox
        justifyContent="space-between"
        flex="none"
        alignItems="center"
        position="fixed"
        height={pxToRem(80)}
        width="100%"
        // bg={COLORS.VISTA_BLUE}
        bg={path === '/dashboard' ? COLORS.VISTA_BLUE : COLORS.CLOCK}
      >
        <Text
          fontSize="xl"
          color={path === '/dashboard' ? COLORS.WHITE : COLORS.BLACK}
          ml="l"
        >
          {email.split('@')[0]}
        </Text>
        <HamburgerContainer mr="l">
          <HamburgerButton
            open={isVisible}
            onClick={onMobileMenuButtonClick}
            width={20}
            height={15}
            strokeWidth={2}
            color={hamColour}
            animationDuration={0.6}
          />
        </HamburgerContainer>
        {MobileMenuComp}
      </HeaderFixedBox>
    </Box>
  )
}

Header.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  onMobileMenuButtonClick: PropTypes.func.isRequired,
  mobileMenuComp: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Header
