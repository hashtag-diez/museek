import React from 'react'
import styled from 'styled-components'

const Button = ({ onClick }) => {
  return (
    <AppButton
      onClick={onClick}
    >
      get started
    </AppButton>
  )
}

const AppButton = styled.button`
  color: white;
  margin-top: 20px;
  padding: 1em 5em;
  border-radius: 40px;
  font-weight: 600;
  background-color: black;
  outline: none;
  border: none;
  font-size: 1.1em;
`

export default Button
