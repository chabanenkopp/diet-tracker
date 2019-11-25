import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, height, fontSize, width, maxWidth } from 'styled-system'
import { transparentize } from 'polished'
import { theme, border, radius } from 'Theme'
import { COLORS } from 'constants/constants'

const inputFuncs = [space, height, width, maxWidth, fontSize]

const Input = styled.input`
  border-radius: ${radius.m};
  color: ${COLORS.LUXURY};
  font-size: 16px;
  display: block;
  background-color: ${({ isValid }) =>
    isValid ? COLORS.WHITE : transparentize(0.85, COLORS.RED_ORANGE_JUICE)};
  :focus {
    border-color: ${COLORS.BUTTERSCOTCH};
    outline: none;
  }
  ::placeholder {
    color: ${COLORS.LUXURY};
    font-size: ${theme.fontSizes.m};
  }
  border: ${border};
  ${inputFuncs}
`

Input.propTypes = {
  isValid: PropTypes.bool,
}

Input.defaultProps = {
  isValid: true,
}

export default Input
