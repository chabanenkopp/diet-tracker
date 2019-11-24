import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { COLORS } from 'constants/constants'
import shape from 'assets/images/circle.svg'

const Shape = styled.img`
  margin: 0 auto;
`

const TextContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Circle = () => (
  <Flex>
    <Box m="0 auto" position="relative">
      <Shape src={shape} />
      <TextContainer>
        <Text fontSize="xxl" color={COLORS.WHITE} textAlign="center">
          111
        </Text>
        <Text fontSize="xxl" color={COLORS.WHITE}>
          Diets
        </Text>
      </TextContainer>
    </Box>
  </Flex>
)

export default Circle
