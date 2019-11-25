import React from 'react'
import { animated, useSpring } from 'react-spring'
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
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Circle = () => {
  const spring = useSpring({ from: { val: 0 }, to: { val: 111 } })
  return (
    <Flex>
      <Box m="0 auto" position="relative">
        <Shape src={shape} />
        <TextContainer>
          <Text fontSize="xxl" color={COLORS.WHITE} textAlign="center">
            <animated.span>
              {spring.val.interpolate((val) => Math.floor(val))}
            </animated.span>
          </Text>
          <Text fontSize="xxl" color={COLORS.WHITE}>
            Diets
          </Text>
        </TextContainer>
      </Box>
    </Flex>
  )
}

export default Circle
