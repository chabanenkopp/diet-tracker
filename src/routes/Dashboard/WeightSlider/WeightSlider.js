import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { fontWeights, radius } from 'Theme'
import { COLORS } from 'constants/constants'
import { pxToRem } from 'helpers'
import Button from 'components/atoms/Button'
import InputRange from 'components/molecules/inputRange'
import WeightService from 'services/weight-service'
import ModalWeight from './ModalWeight'

const CONTAINER_WIDTH = [pxToRem(390), pxToRem(450), pxToRem(790)]
const INPUT_WIDTH = [pxToRem(390), pxToRem(450), pxToRem(600)]

const weightService = new WeightService()

export default class WeightSlider extends Component {
  state = {
    weight: 30,
    isModalOpen: false,
    isSuccess: false,
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({ weight: value })
  }

  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }))
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    const { weight } = this.state
    const { email } = this.props
    this.setState({ isSuccess: true })
    this.handleToggleModal()
    weightService
      .postWeight(weight, email)
      .then((resp) => {
        this.setState({ isSuccess: true })
        this.handleToggleModal()
        console.log(resp)
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { weight, isSuccess, isModalOpen } = this.state
    return (
      <Box>
        <Box data-aos="fade-up">
          <Flex justifyContent="center" mb="xl">
            <Text
              color={COLORS.MAJOLICA_BLUE}
              fontWeight={fontWeights.thin}
              fontSize={['xxl', 'xxxl', 'xxxxl']}
            >
              Send current&nbsp;
            </Text>
            <Text
              color={COLORS.FLAX_FLOWER_BLUE}
              fontWeight={fontWeights.semi_bold}
              fontSize={['xxl', 'xxxl', 'xxxxl']}
            >
              weight
            </Text>
          </Flex>
          <form onSubmit={this.handleSubmitForm}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                flexDirection={['column', 'column', 'row']}
                alignItems={['initial', 'initial', 'center']}
              >
                <InputRange
                  type="range"
                  onChange={this.handleOnChange}
                  width={INPUT_WIDTH}
                  min={30}
                  max={130}
                  step={1}
                  value={weight}
                />
                <Flex
                  flexDirection="column"
                  ml={[0, 0, 'm']}
                  mt={['m', 'm', '0']}
                >
                  <Button.Filled
                    type="submit"
                    gradientFromColor={COLORS.FLAX_FLOWER_BLUE}
                    gradientToColor={COLORS.ATHENA_BLUE}
                    borderRadius={radius.pill}
                    isShadow
                    fontSize="m"
                    height={pxToRem(56)}
                    px={(0, 0, [pxToRem(50)])}
                  >
                    CONTINUE
                  </Button.Filled>
                </Flex>
              </Flex>
              <Flex
                justifyContent={['center', 'center', 'flex-start']}
                width={CONTAINER_WIDTH}
                mt="m"
              >
                <Text
                  fontWeight={fontWeights.semi_bold}
                  color={COLORS.MAJOLICA_BLUE}
                >
                  CURRENT WEIGHT:
                </Text>
                <Text
                  fontWeight={fontWeights.semi_bold}
                  color={COLORS.AMERICAN_PINK}
                  ml="m"
                >
                  {weight}
                </Text>
              </Flex>
              <Flex
                flexDirection={['column', 'column', 'row']}
                alignItems={['center', 'center', 'initial']}
                width={CONTAINER_WIDTH}
                mt="m"
              />
            </Flex>
          </form>
        </Box>
        <ModalWeight
          onCloseModalButtonClick={this.handleToggleModal}
          isModalOpen={isModalOpen}
          isSuccess={isSuccess}
        />
      </Box>
    )
  }
}

WeightSlider.propTypes = {
  email: PropTypes.string,
}
