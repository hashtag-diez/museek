import React, {useState} from 'react'
import styled from 'styled-components'

const Tag = ({ onChange, choice, content, type }) => {
  const [Active, setActive] = useState(false)
  const handleClick = (e, content) => {
    e.preventDefault()
    if (type==='extended') setActive(!Active)
    onChange()
  }
  if(type==='extended')
  return (
    <TagButton active={Active} onClick={(e) => handleClick(e, content)} type={type}>{content} </TagButton>
  )
  else{
    if(content===choice){
      return (
        <TagButton active={true} onClick={(e) => handleClick(e, content)} type={type}>{content} </TagButton>
      )
    }
    else{
      return (
        <TagButton active={false} onClick={(e) => handleClick(e, content)} type={type}>{content} </TagButton>
      )
    }
  }
}

const TagButton = styled.button`
  cursor: pointer;
  display: block;
  font-family: 'Nunito';
  font-weight: 400;
  border: 0;
  color: ${(props) => (props.active ? 'white' : 'black')};
  width: ${(props) => (props.type === 'extended' ? 'auto' : '100%')};
  border-radius: 40px;
  background-color: ${(props) => (props.active ? '#E67E22' : 'rgba(200,203,194,0.17)')} ;
  padding: 10px 10px;
  margin: ${(props) => (props.type === 'extended' ? '5px' : '15px 0px')};
`

export default Tag
