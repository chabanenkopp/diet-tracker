import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize } from 'polished'
import { radius, getTransition } from 'Theme'
import { Text } from 'components/atoms/Typography'
import { Flex } from 'components/atoms/Layout'
import { pxToRem } from 'helpers'
import { COLORS } from 'constants/constants'
import Transition from 'components/atoms/Transition'

const TRANSITION_TIMEOUT = 300

const Container = styled(Flex)`
  position: fixed;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(50)};
  width: 96%;
  padding: 6px;
  top: ${pxToRem(30)};
  border-radius: ${radius.pill};
  background-color: ${transparentize(0.1, COLORS.RED_ORANGE_JUICE)};
  transition: all 0.5s ease-in-out;
  box-shadow: ${transparentize(0.85, COLORS.SHADOWED_STEEL)} 0 0.7rem 2rem 0;
  opacity: 0;
  transition: ${getTransition('opacity')};
  ${({ state }) =>
    state === Transition.STATE.ENTERING ||
    (state === Transition.STATE.ENTERED && `opacity: 1;`)}
`

const Popup = ({ isVisible, errorMessage }) => (
  <Transition
    in={isVisible}
    timeout={TRANSITION_TIMEOUT}
    mountOnEnter
    unmountOnExit
  >
    {(state) => (
      <Flex justifyContent="center">
        <Container state={state}>
          <Text
            fontSize={['xs', 's', 'l']}
            fontWeight="600"
            color={COLORS.WHITE}
          >
            {errorMessage}
          </Text>
        </Container>
      </Flex>
    )}
  </Transition>
)

Popup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
}

export default Popup
