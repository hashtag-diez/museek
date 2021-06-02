import React, { useState, createRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { Dots } from './Imports'
import MessageList from './MessageList'

const Conversation = ({ name, image }) => {
  const [Messages, setMessages] = useState([
    { author: name, content: 'hahahaaaa' },
    { author: name, content: 'dont worry budd' },
    { author: name, content: 'hahahaaaa' },
    { author: 'Me', content: 'hahahaaaa' },
    { author: name, content: 'hahahaaaa' },
    { author: name, content: 'hahahaaaa' },
    { author: name, content: 'hahahaaaa' },
    { author: name, content: 'hahahaaaa' },
    { author: name, content: 'hahahaaaa' },
    { author: name, content: 'hahahaaaa' }
  ])
  const TextArea = createRef()
  const [Active, setActive] = useState(false)
  const handleChange = () => {
    const ref = TextArea.current
    const newMessages = [...Messages]
    const newM = { author: 'Me', content: ref.value }
    ref.value = ''
    newMessages.push(newM)
    setMessages(newMessages)
  }
  return (
    <>
      <StyledDiv style={{ paddingLeft: '10px' }}>
        <img onClick={() => setActive(true)} src={image} alt='contact icon' />
        <div onClick={() => setActive(true)}>
          <h3>
            {
              name
            }
          </h3>
          <p>
            {
              (Messages[Messages.length - 1] ? Messages[Messages.length - 1].content : '')
            }
          </p>
        </div>
        <Dots />
      </StyledDiv>
      <StyledMain active={Active}>
        <StyledHeader>
          <div>
            <img src='https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-back_97586.png' alt='back arrow 'width='26' onClick={() => setActive(false)} />
            <img src={image} style={{ borderRadius: '100px' }} width='90' alt='contact icon'/>
            <img src='https://image.flaticon.com/icons/png/128/292/292178.png' width='26' alt='infos button' />
          </div>
          <h3>{name}</h3>
        </StyledHeader>
        <div>
          <MessageList list={Messages} />
        </div>
        <footer>
          <StyledTextArea ref={TextArea} />
          <img src='https://static.thenounproject.com/png/2747988-200.png' onClick={() => handleChange()} width='40' alt='send button' />
        </footer>
      </StyledMain>
    </>
  )
}
const slideIn = keyframes`
  from {
    visibility: hidden;
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0vw);
    visibility: visible;
  }
`
const slideOut = keyframes`
  from {
    visibility: visible;
    transform: translateX(0vw);
  }
  to {
    transform: translateX(100vw);
    visibility: hidden;
  }
`
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: inherit;
  img {
    cursor: pointer;
  }
  h3{
    width: inherit;
    font-family: 'Nunito';
    font-weight: 800;
    font-size: 21px;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  > div {
    width: inherit;
    padding: 10px 20px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const StyledTextArea = styled.textarea`
  padding: 1px 10px;
  background-color: #D6CBC2;
  border-radius: 20px;
  resize: none;
  border: 0;
  width: 100%;
  outline: none;
  font-family: 'Nunito';
  font-size: 17px;
  font-weight: 700;
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  width: 100%;
  > img {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    margin-right: 12px;
    cursor: pointer;
  }
  h3{
    color: #2E1805;
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Nunito';
  }
  p {
    color: #E67E22;
    font-weight: 400;
    margin: 0;
    font-size: 17px;
    font-family: 'Nunito';
  }
  > div {
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    flex: 1;
    cursor: pointer;
    width: 100%;
  }
`
const StyledMain = styled.main`
  width: min(414px, 101vw);
  height: 100vh;
  visibility: hidden;
  position: absolute;
  animation: ${({ active }) => (active ? slideIn : slideOut)} 0.4s ${({ active }) => (active ? 'ease-out' : 'ease-in')}  forwards;
  top: -79px;
  left: 50%;
  background-color: #ecf0f1;
  > footer {
    display: flex;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 20px;
    position: absolute;
    bottom: 0;
  }
  footer img{
    cursor: pointer;
  }
  div section {
    display: flex;
    width: 100%;
    padding:  0px 25px 15px 25px;
    flex-direction: column;
    gap: 5px;
    overflow-y: scroll;
    max-height: 75vh;
  }  
`
export default Conversation