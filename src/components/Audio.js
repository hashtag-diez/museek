import React from 'react'
import styled from 'styled-components'
import { Music, Play, Trash, Star } from './Imports'
const Audio = ({ title, duration, handleDelete }) => {
  return (
    <StyledDiv>
      <div>
        <Music />
        <h3>
          {
            title
          }
        </h3>
        <h4>
          - {duration}
        </h4>
      </div>
      <div>
        <Star />
        <Trash onClick={() => handleDelete()} />
        <Play />
      </div>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0px;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h3{
    font-weight: 700;
    margin: 0;
  }
  h4{
    margin: 0;
    font-weight: 600;
  }
  svg{
    margin: 0px 8px;
  }
`
export default Audio
