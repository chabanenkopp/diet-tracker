import React from 'react'
import PropTypes from 'prop-types'
import { COLORS } from 'constants/constants'

const ChangeFontColorByPathName = ({ children, pathName, targetPath }) => (
  <font color={pathName === targetPath ? COLORS.FLAX_FLOWER_BLUE : null}>
    {children}
  </font>
)

ChangeFontColorByPathName.propTypes = {
  children: PropTypes.string.isRequired,
  targetPath: PropTypes.string.isRequired,
  pathName: PropTypes.string,
}

export default ChangeFontColorByPathName
