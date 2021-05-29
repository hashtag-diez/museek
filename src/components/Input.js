import React from 'react'
import styled from 'styled-components'

const Input = ({ onChange, placeholder }) => {
  return (
    <StyledInput onChange={(e) => onChange(e)} placeholder={placeholder} />
  )
}

const StyledInput = styled.input`
  display: block;
  font-family: 'Nunito';
  font-size: 15px;
  font-weight: 600;
  width: inherit !important;
  border: none;
  outline: none;
  background-color: rgba(200,203,194,0.17);
  padding: 15px 0px;
  padding-left: 25px;
  padding-right: auto;
  border-radius: 25px;
  margin: 15px 0px;
  ::placeholder{
    color: #AFA79F;
  }
`

export default Input
