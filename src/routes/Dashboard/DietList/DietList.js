import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { COLORS } from 'constants/constants'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import diet from 'assets/images/diet.jpg'

// const ReactLink = styled(Link)`
//   text-decoration: none;
// `

const DietIMG = styled.img`
  max-width: ${pxToRem(120)};
  max-height: ${pxToRem(120)};
`

const ItemContainer = styled(Box)`
  border-radius: 5px;
  max-width: ${pxToRem(500)};
  margin-left: ${pxToRem(20)};
  margin-right: ${pxToRem(20)};
  padding: ${pxToRem(20)} ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(10)};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const LinkContainer = styled(Box)`
  border-top: 1px solid ${COLORS.VIOLET_HUSH};
`

const DietItem = () => (
  <ItemContainer mx="l" mb="l">
    <Flex justifyContent="center" mb="m" alignItems="center">
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
        as={Box}
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
  <Box width="100%">
    <Box margin="0 auto" maxWidth={pxToRem(500)}>
      <DietItem />
    </Box>
  </Box>
)

export default DietList
