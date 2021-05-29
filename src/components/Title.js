import React from 'react'
import styled from 'styled-components'

const Title = ({ header, detail }) => {
  return (
    <TitleDiv>
      <h1>
        {header}
      </h1>
      <h3>
        {detail}
      </h3>
    </TitleDiv>
  )
}
const TitleDiv = styled.div`
  display: block;
  text-align: center;
  font-family: 'Nunito';
  align-self: center;
  h1{
    font-weight: 800;
    font-size: 32px;
    margin: 12px 0px;
  }
  h3 {
    color: #E67E22;
    font-weight: 700;
    margin: 12px 0px;
  }
`
export default Title
