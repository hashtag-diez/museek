import React from 'react'
import styled from 'styled-components'

const Button = ({ color, active, content, onClick }) => {
  const handleClick = (e) => {
    if (active !== 'false') onClick(e)
  }
  return (
    <AppButton
      color={color}
      onClick={(e) => handleClick(e)}
      active={active}
    >
      {
        content
      }
    </AppButton>
  )
}

const AppButton = styled.button`
  color: white;
  font-family: inherit;
  letter-spacing: 0.1em;
  margin: 10px;
  padding: 12px 60px;
  border-radius: 40px;
  font-weight: 700;
  opacity: ${(props) => (props.active === 'true' ? '1' : '0.5')};
  background-color: ${(props) => (props.color)};
  outline: none;
  border: none;
  font-size: 17px;
`

export default Button
