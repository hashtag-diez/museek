import React from 'react'
import styled from 'styled-components'

const Selector = ({ onChange, options }) => {
  const optionsList = Object.keys(options).map(index => (
    <option key={index}>{options[index]}</option>
  ))

  return (
    <StyledSelector onChange={(e) => onChange(e)}>
      {
        optionsList
      }
    </StyledSelector>
  )
}
const StyledSelector = styled.select`
  display: block;
  font-family: 'Nunito';
  font-size: 15px;
  font-weight: 600;
  width: 92%;
  border: none;
  outline: none;
  background-color: rgba(200,203,194,0.17);
  padding: 15px 0px;
  padding-left: 25px;
  padding-right: auto;
  border-radius: 25px;
  margin: 15px 0px;
`
export default Selector
