import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/atoms/Typography'
import { COLORS, ROUTES } from 'constants/constants'
import { Flex } from 'components/atoms/Layout'
import { pxToRem } from 'helpers'
import Modal from 'components/molecules/Modal'

const { DASHBOARD } = ROUTES

const fontSizeText = ['xs', 's', 'l']
const fontSizeHeading = ['xxl', 'xxl', 'xxxl']
const lineHeightText = pxToRem(30)

const ModalTitle = () => (
  <Text
    fontSize={fontSizeHeading}
    color={COLORS.DARK_SAPHIRE}
    textAlign="center"
    fontWeight="bold"
    lineHeight={pxToRem(44)}
  >
    You Are Logged In!
  </Text>
)

const ModalBody = () => (
  <Flex flexDirection="column" alignItems="center">
    <Text
      fontSize={fontSizeText}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      Press CONTINUE to go to the main page
    </Text>
  </Flex>
)

const ModalLogin = ({ onClose, isModalOpen }) => (
  <Modal
    to={`/${DASHBOARD}`}
    onClick={onClose}
    isVisible={isModalOpen}
    buttonLabel="CONTINUE"
    title={<ModalTitle />}
    body={<ModalBody />}
  />
)

ModalLogin.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ModalLogin
