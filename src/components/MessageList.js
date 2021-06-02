import React, { useEffect, createRef } from 'react'
import styled from 'styled-components'
const MessageList = ({ list }) => {
  const MessageWrapper = createRef()
  useEffect(() => {
    MessageWrapper.current.scrollTop = MessageWrapper.current.scrollHeight 
  }, [MessageWrapper])
  return (
    <section ref={MessageWrapper}>
      {
        list.map(msg => (<MsgBox isFromMe={(msg.author === 'Me')} key={msg}> {msg.content} </MsgBox>))
      }
    </section>
  )
}
const MsgBox = styled.div`
  display: inline;
  color : ${(props) => (props.isFromMe ? 'white' : 'black')};
  background-color: ${(props) => (props.isFromMe ? '#E67E22' : '#bdc3c7')};
  position : relative;
  border-radius : ${(props) => (!props.isFromMe ? '15px 20px 20px 0px' : '20px 15px 0px 20px')};
  padding : 0.5em;
  margin : 10px 0px;
  align-self : ${(props) => (props.isFromMe ? 'flex-end' : 'flex-start')};
  width: min(inherit, auto);
  font-size: 16px;
  font-weight: 600;
`
export default MessageList
