import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from 'components/atoms/Layout'
import { COLORS } from 'constants/constants'
import PropTypes from 'prop-types'
import withAuthService from 'hoc/withAuthService'
import compose from 'utils'
import Header from 'components/organisms/Header'
import MobileMenu from 'components/organisms/MobileMenu'
import wave from 'assets/images/wave.svg'
import NavBar from 'components/organisms/NavBar'
import Circle from './Circle'
import DietList from './DietList'
import WeightSlider from './WeightSlider'
import ImageUpload from './ImageUpload'

const WaveShape = styled.img`
  transform: translateY(7px);
`

class Dashboard extends Component {
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
      <div>
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
        <Box bg={COLORS.VISTA_BLUE}>
          <Circle />
          <WaveShape src={wave} />
        </Box>
        <Box mt="xl">
          <WeightSlider email={email} />
        </Box>
        <Box mt="xl">
          <ImageUpload email={email} />
        </Box>
        <Box mt="xl" mb="xxl">
          <DietList />
        </Box>
        <NavBar path={path} />
      </div>
    )
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.object,
  email: PropTypes.string,
  isSliderVisible: PropTypes.bool,
  handleToggleMobileMenuClick: PropTypes.func,
  path: PropTypes.string.isRequired,
}

export default compose(
  withRouter,
  withAuthService
)(Dashboard)
