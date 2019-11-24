import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'constants/constants'
import NavBar from 'components/organisms/NavBar'
import PropTypes from 'prop-types'
import withAuthService from 'hoc/withAuthService'
import compose from 'utils'
import clock from 'assets/images/clock.svg'
import { pxToRem } from 'helpers'
import Header from 'components/organisms/Header'
import MobileMenu from 'components/organisms/MobileMenu'

const ClockShape = styled.img`
  min-width: ${pxToRem(244)};
  margin-top: ${pxToRem(40)};
`

const TitleContainer = styled(Box)`
  border-bottom: 1px solid ${COLORS.GREEN_LINE};
  width: 90%;
  padding-bottom: ${pxToRem(25)};
`

class Clock extends Component {
  componentDidMount() {
    document.body.style.overflow = 'auto'
  }

  render() {
    const {
      currentUser: { email },
      isSliderVisible,
      handleToggleMobileMenuClick,
      path,
    } = this.props
    return (
      <Box bg={COLORS.CLOCK} minHeight="100vh" pb="xxl">
        <Header
          isVisible={isSliderVisible}
          onMobileMenuButtonClick={handleToggleMobileMenuClick}
          email={email}
          path={path}
          mobileMenuComp={
            <MobileMenu
              isVisible={isSliderVisible}
              onClick={handleToggleMobileMenuClick}
            />
          }
        />
        <Flex justifyContent="center" alignItems="center">
          <ClockShape src={clock} />
        </Flex>
        <NavBar path={path} />
        <Flex mt="xl" mb="l" justifyContent="center" alignItems="center">
          <TitleContainer>
            <Text textAlign="center" fontSize="xxl" fontWeight="semi_bold">
              Current Activity
            </Text>
          </TitleContainer>
        </Flex>
        <Box width="90%" m="0 auto">
          <Text fontSize="xl" fontWeight="semi_bold">
            Meal:
          </Text>
          <Text textAlign="justify" fontSize="xl" mt="m" mx="s">
            It is time to have fun and eat some cool stuff. We suggest that you
            eat a delicious dish that we call{' '}
            <font color={COLORS.GREEN_LINE}>
              <b>Happy hour</b>
            </font>
            .
          </Text>
          <Text fontSize="xl" fontWeight="semi_bold" mt="l">
            Products:
          </Text>
          <Text
            textAlign="justify"
            fontSize="xl"
            color={COLORS.PRODUCTS}
            mt="m"
            mx="s"
          >
            Rice, grapes, mango, cherries, fish, yougurt, eggs, millk, carrots
          </Text>
          <Text fontSize="xl" fontWeight="semi_bold" mt="l">
            Recipe:
          </Text>
          <Text textAlign="justify" fontSize="xl" mt="m" mx="s">
            Take all these producs and but them in a bowl. Boill them together
            and eat with pleasure!
          </Text>
        </Box>
      </Box>
    )
  }
}

Clock.propTypes = {
  currentUser: PropTypes.object,
  email: PropTypes.string,
  path: PropTypes.string.isRequired,
  isSliderVisible: PropTypes.bool,
  handleToggleMobileMenuClick: PropTypes.func,
}

export default compose(
  withRouter,
  withAuthService
)(Clock)
