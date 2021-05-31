import React, { useState } from 'react'
import { AppBox } from '../style/GlobalStyles'
import { ReactComponent as Logo } from '../MUSEEK.svg'
import { ReactComponent as Heart } from '../heart-option.svg'
import { ReactComponent as Option } from '../hamburger.svg'
import { ReactComponent as Micro } from '../mic.svg'
import { ReactComponent as MicroF } from '../mic-full.svg'
import { ReactComponent as Message } from '../message.svg'
import { ReactComponent as MessageF } from '../message-full.svg'
import { ReactComponent as Home } from '../home.svg'
import { ReactComponent as HomeF } from '../home-full.svg'
import { ReactComponent as Setting } from '../setting.svg'
import { ReactComponent as SettingF } from '../setting-full.svg'
import Card from '../components/Card'
import styled, { keyframes, css } from 'styled-components'
import TinderCard from 'react-tinder-card'

const App = () => {
  const [Page, setPage] = useState(2)
  const [Next, setNext] = useState()
  const handleCarrousel = (next) => {
    const curr = Page
    setNext(next)
    setTimeout(() => setPage(next), Math.abs(curr - next) * 300)
  }
  return (
    <StyledAppBox>
      <StyledHeader>
        <Heart />
        <Logo width="100"/>
        <Option />
      </StyledHeader>
      <SignInCarrousel curr={Page} next={Next}>
        <StyledBox>
          <TinderCard preventSwipe={['right', 'left']}>
            <Card name='Jakayla Toney' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          </TinderCard>
          <TinderCard preventSwipe={['bottom', 'up']}>
            <Card name='Jakayla Toney1' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          </TinderCard>
        </StyledBox>
        <StyledBox>
          <TinderCard preventSwipe={['right', 'left']}>
            <Card name='Jakayla Toney' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          </TinderCard>
          <TinderCard preventSwipe={['bottom', 'up']}>
            <Card name='Jakayla Toney2' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          </TinderCard>
        </StyledBox>
        <StyledBox>
          <TinderCard preventSwipe={['right', 'left']}>
            <Card name='Jakayla Toney' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          </TinderCard>
          <TinderCard preventSwipe={['bottom', 'up']}>
            <Card name='Jakayla Toney3' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          </TinderCard>
        </StyledBox>
        <StyledBox>
          <TinderCard preventSwipe={['right', 'left']}>
            <Card name='Jakayla Toney' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          </TinderCard>
          <TinderCard preventSwipe={['bottom', 'up']}>
            <Card name='Jakayla Toney4' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          </TinderCard>
        </StyledBox>
        {/* <StyledBox>
        </StyledBox>
        <StyledBox>
        </StyledBox>
        <StyledBox>
        </StyledBox> */}
      </SignInCarrousel>
      <StyledFooter>
        {
          (Page === 1 ? <MicroF /> : <Micro onClick={() => handleCarrousel(1)} />)
        }
        {
          (Page === 2 ? <HomeF /> : <Home onClick={() => handleCarrousel(2)} />)
        }
        {
          (Page === 3 ? <MessageF /> : <Message onClick={() => handleCarrousel(3)} />)
        }
        {
          (Page === 4 ? <SettingF /> : <Setting onClick={() => handleCarrousel(4)} />)
        }
      </StyledFooter>
    </StyledAppBox>
  )
}
const slide = (a, b) => keyframes`
  from {
    transform: translateX(${a}%);
  }
  to {
    transform: translateX(${b}%);
  }
`
const StyledAppBox = styled(AppBox)`
  justify-content: space-between;
  align-items: center;
  position: relative;
  svg{
    cursor: pointer;
  }
`
const SignInCarrousel = styled.section`
  display: flex;
  justify-self: flex-start;
  flex-direction: row;
  height: inherit;
  width: 400%;
  transform: translateX(12.5%);
  animation: ${({ curr, next }) => (slide(37.5 - (curr - 1) * 25, 37.5 - (next - 1) * 25))} ${({ curr, next }) => (Math.abs(curr - next) * 0.3)}s ease-in-out forwards; 
`

const StyledBox = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 25px 30px 25px 30px;
  width: 90%;
  > div{
    height: 90%;
    width: 100%;
    position: absolute;
  }
`

const StyledHeader = styled.header`
  display: flex;
  width: inherit;
  padding: 15px 15px 0px 15px;
  gap: 40px;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
`
const StyledFooter = styled.div`
  display: flex;
  gap: 40px;
  background-color: rgba(200,203,194,0.17);
  border-radius: 40px;
  padding: 7px 40px;
  margin: 0px auto 25px auto;
  z-index: 100;
`

export default App
