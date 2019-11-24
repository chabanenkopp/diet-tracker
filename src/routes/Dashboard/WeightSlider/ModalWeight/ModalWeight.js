import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'constants/constants'
import { Flex } from 'components/atoms/Layout'
import { pxToRem, scrollIntoView } from 'helpers'
import Modal from 'components/molecules/Modal'

const fontSizeText = ['m', 'm', 'l']
const fontSizeHeading = ['xxl', 'xxl', 'xxxl']
const lineHeightText = pxToRem(30)

const ModalTextFailure = () => (
  <Flex flexDirection="column" alignItems="center">
    <Text
      fontSize={fontSizeText}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      Press CONTINUE to proceed
    </Text>
  </Flex>
)
const ModalTextSuccess = () => (
  <Flex flexDirection="column" alignItems="center">
    <Text
      fontSize={fontSizeText}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      Press CONTINUE to proceed
    </Text>
  </Flex>
)

const ModalHeadingFailure = () => (
  <Text
    fontSize={fontSizeHeading}
    color={COLORS.MAJOLICA_BLUE}
    textAlign="center"
    fontWeight="bold"
    lineHeight={pxToRem(44)}
  >
    Something Went Wrong..
  </Text>
)
const ModalHeadingSuccess = () => (
  <React.Fragment>
    <Text
      fontSize={fontSizeHeading}
      color={COLORS.MAJOLICA_BLUE}
      textAlign="center"
      fontWeight="bold"
      lineHeight={pxToRem(44)}
    >
      Your Data Is Sent!
    </Text>
  </React.Fragment>
)

const ModalWeight = ({ onCloseModalButtonClick, isModalOpen, isSuccess }) => (
  <Modal
    onClose={onCloseModalButtonClick}
    onClick={
      isSuccess
        ? () => {
            onCloseModalButtonClick()
            scrollIntoView('contact-form')
          }
        : onCloseModalButtonClick
    }
    isVisible={isModalOpen}
    buttonLabel="CONTINUE"
    title={isSuccess ? <ModalHeadingSuccess /> : <ModalHeadingFailure />}
    body={isSuccess ? <ModalTextSuccess /> : <ModalTextFailure />}
  />
)

ModalWeight.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onCloseModalButtonClick: PropTypes.func.isRequired,
}

export default ModalWeight
