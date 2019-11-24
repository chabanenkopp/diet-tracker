import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as RouterNavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(RouterNavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const NavLink = ({ children, ...rest }) => (
  <StyledLink {...rest}> {children}</StyledLink>
)

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavLink
