import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from 'components/atoms/Layout'
// import { COLORS } from 'constants/constants'
import { Text } from 'components/atoms/Typography'
import PropTypes from 'prop-types'
import withAuthService from 'hoc/withAuthService'
import compose from 'utils'
import Header from 'components/organisms/Header'
import MobileMenu from 'components/organisms/MobileMenu'
import NavBar from 'components/organisms/NavBar'
import diet from 'assets/images/diet.jpg'

const DietImg = styled(Box)`
  background: url("${diet}") top cover/ 90% no-repeat ;
  min-width: 100vw;
  min-height: 100vh;
`

class Detail extends Component {
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
      <>
        <DietImg>
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
        </DietImg>
        <NavBar path={path} />
        <Text>LOL</Text>
      </>
    )
  }
}

Detail.propTypes = {
  currentUser: PropTypes.object,
  email: PropTypes.string,
  isSliderVisible: PropTypes.bool,
  handleToggleMobileMenuClick: PropTypes.func,
  path: PropTypes.string.isRequired,
}

export default compose(
  withRouter,
  withAuthService
)(Detail)
