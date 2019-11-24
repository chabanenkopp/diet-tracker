import styled from 'styled-components'
import { fontSize, width, maxWidth } from 'styled-system'
import { COLORS } from 'constants/constants'
import { space, radius } from 'Theme'

const inputFuncs = [width, maxWidth, fontSize]

const InputRange = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  height: ${space.m};
  background: ${COLORS.FROSTED_GLASS};
  opacity: 0.7;
  transition: opacity 0.5s;
  border-radius: ${radius.l};
  ::-webkit-slider-thumb {
    border: none;
    appearance: none;
    transition: 0.5s;
    border-radius: ${radius.pill};
    width: ${space.l};
    height: ${space.l};
    background: ${COLORS.VISTA_BLUE};
    cursor: pointer;
    :hover {
      background: ${COLORS.AMERICAN_PINK};
    }
  }
  ::-moz-range-thumb {
    border: none;
    transition: 0.5s;
    width: ${space.l};
    height: ${space.l};
    border-radius: ${radius.pill};
    background: ${COLORS.VISTA_BLUE};
    cursor: pointer;
    :hover {
      background: ${COLORS.BLAZE};
    }
  }
  ::-moz-focus-outer,
  ::-moz-focus-inner,
  :active,
  :focus {
    border: 0;
    outline: none;
  }
  :hover {
    opacity: 1;
  }
  ${inputFuncs}
`

export default InputRange
