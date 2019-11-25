/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from 'components/atoms/Layout'
import { radius } from 'Theme'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'constants/constants'
import { pxToRem } from 'helpers'
import Button from 'components/atoms/Button'
import ImageService from 'services/image-service'
import upload from 'assets/images/upload.svg'
import ModalWeight from '../WeightSlider/ModalWeight'

const UploadImage = styled.img`
  margin: 0 auto;
  width: ${pxToRem(100)};
`

const ImageContainer = styled(Flex)`
  > input {
    width: 0;
  }
  justify-content: center;
  justify-items: center;
`

const imageService = new ImageService()

export default class ImageUpload extends Component {
  state = {
    base: null,
    isModalOpen: false,
    isSuccess: false,
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    const { base } = this.state
    const { email } = this.props
    this.setState({ isSuccess: true })
    this.handleToggleModal()
    imageService
      .postImage(base, email)
      .then((resp) => {
        this.setState({ isSuccess: true })
        this.handleToggleModal()
        console.log(resp)
      })
      .catch((err) => console.log(err))
  }

  handleOnChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      this.setState({
        base: reader.result,
      })
    }
  }

  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }))
  }

  render() {
    const { isSuccess, isModalOpen } = this.state
    return (
      <Box mb={pxToRem(100)}>
        <Flex justifyContent="center" mb="l">
          <Text
            color={COLORS.MAJOLICA_BLUE}
            fontWeight="thin"
            fontSize={['xxl', 'xxxl', 'xxxxl']}
          >
            Upload meal&nbsp;
          </Text>
          <Text
            color={COLORS.FLAX_FLOWER_BLUE}
            fontWeight="semi_bold"
            fontSize={['xxl', 'xxxl', 'xxxxl']}
          >
            photo
          </Text>
        </Flex>
        <form onSubmit={this.handleSubmitForm}>
          <ImageContainer mb="l">
            <label htmlFor="file-input">
              <UploadImage src={upload} />
            </label>
            <input id="file-input" type="file" onChange={this.handleOnChange} />
          </ImageContainer>
          <Flex
            flexDirection="column"
            ml={[0, 0, 'm']}
            mt={['m', 'm', '0']}
            justifyContent="center"
            alignItems="center"
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
        </form>
        <ModalWeight
          onCloseModalButtonClick={this.handleToggleModal}
          isModalOpen={isModalOpen}
          isSuccess={isSuccess}
        />
      </Box>
    )
  }
}

ImageUpload.propTypes = {
  email: PropTypes.string,
}
