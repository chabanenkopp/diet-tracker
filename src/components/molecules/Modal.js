import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { transparentize } from 'polished'
import { Box, Flex } from 'components/atoms/Layout'
import { COLORS } from 'constants/constants'
import { fontWeights, radius, getTransition } from 'Theme'
import { pxToRem } from 'helpers'
import Button from 'components/atoms/Button'
import NavLink from 'components/atoms/NavLink'
import Transition from 'components/atoms/Transition'

const TRANSITION_TIMEOUT = 300

const Overlay = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: scroll;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  background-color: ${transparentize(0.35, COLORS.POT_BLACK)};
  opacity: 0;
  transition: ${getTransition('opacity')};
  ${({ state }) =>
    state === Transition.STATE.ENTERING ||
    (state === Transition.STATE.ENTERED && `opacity: 1;`)}
`

const ModalContainer = styled(Box)`
  border-radius: ${radius.m};
`

const Modal = ({ onClick, isVisible, title, body, buttonLabel, to }) => {
  const targetRef = React.createRef()
  if (isVisible) {
    disableBodyScroll(targetRef)
  } else {
    clearAllBodyScrollLocks()
  }
  return (
    <Transition
      in={isVisible}
      timeout={TRANSITION_TIMEOUT}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Overlay state={state}>
          <ModalContainer
            ref={targetRef}
            bg={COLORS.WHITE}
            width={[pxToRem(370), pxToRem(420), pxToRem(480)]}
            mt="50px"
          >
            <Flex flexDirection="column" py="l" px="l" justifyContent="center">
              <Box mb="l">{title}</Box>
              <Box
                width={pxToRem(120)}
                height={pxToRem(3)}
                bg={COLORS.BUTTERSCOTCH}
                m="0 auto"
              />
              <Box my="l">{body}</Box>
              {to ? (
                <NavLink to={to}>
                  <Button.Filled
                    onClick={onClick}
                    fontWeight={fontWeights.bold}
                    fontSize="s"
                    mb="m"
                  >
                    {buttonLabel}
                  </Button.Filled>
                </NavLink>
              ) : (
                <Button.Filled
                  onClick={onClick}
                  fontWeight={fontWeights.bold}
                  fontSize="s"
                  mb="m"
                >
                  {buttonLabel}
                </Button.Filled>
              )}
            </Flex>
          </ModalContainer>
        </Overlay>
      )}
    </Transition>
  )
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default Modal
