import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'
import { COLORS, ROUTES } from 'constants/constants'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Link from 'components/atoms/Link'
import diet from 'assets/images/diet.jpg'

const DietIMG = styled.img`
  max-width: ${pxToRem(120)};
`
const ItemContainer = styled(Box)`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: ${pxToRem(20)} ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(10)};
`

const LinkContainer = styled(Box)`
  border-top: 1px solid ${COLORS.VIOLET_HUSH};
`

const DietItem = () => (
  <ItemContainer mx="l" mb="l">
    <Flex justifyContent="center" mb="m">
      <DietIMG src={diet} />
      <Box flex="1" ml="m">
        <Text fontSize="xxl" color={COLORS.VISTA_BLUE}>
          Incredible diet
        </Text>
        <Text fontSize="l">
          Incredible diet for incredible people that will make your life better
        </Text>
      </Box>
    </Flex>
    <LinkContainer>
      <Text
        textAlign="center"
        fontSize="xl"
        fontWeight="semi_bold"
        color={COLORS.BLACK}
        mt="m"
        mb="xs"
      >
        Learn More
      </Text>
    </LinkContainer>
  </ItemContainer>
)

const DietList = () => (
  <div>
    <DietItem />
  </div>
)

export default DietList
