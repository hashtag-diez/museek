import React, { useState } from 'react'
import { AppBox } from '../style/GlobalStyles'
import { ReactComponent as Logo } from '../MUSEEK.svg'
import { ReactComponent as Heart } from '../heart-option.svg'
import { ReactComponent as Bell } from '../bell.svg'
import { ReactComponent as Contact } from '../letter.svg'
import { ReactComponent as Legal } from '../mentions.svg'
import { ReactComponent as Option } from '../hamburger.svg'
import { ReactComponent as LogOut } from '../logout.svg'
import { ReactComponent as Micro } from '../mic.svg'
import { ReactComponent as MicroF } from '../mic-full.svg'
import { ReactComponent as Message } from '../message.svg'
import { ReactComponent as MessageF } from '../message-full.svg'
import { ReactComponent as Home } from '../home.svg'
import { ReactComponent as HomeF } from '../home-full.svg'
import { ReactComponent as Setting } from '../setting.svg'
import { ReactComponent as SettingF } from '../setting-full.svg'
import Card from '../components/Card'
import styled, { keyframes } from 'styled-components'

const App = () => {
  const [Page, setPage] = useState(2)
  const [Next, setNext] = useState()
  const handleCarrousel = (next) => {
    setNext(next)
    setTimeout(() => setPage(next), 300)
  }
  return (
    <StyledAppBox>
      <StyledHeader curr={Page} next={Next}>
        <Heart />
        <Logo width="100"/>
        <Option />
      </StyledHeader>
      <SignInCarrousel curr={Page} next={Next}>
        <StyledBox>
          <Card name='Jakayla Toney' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          <Card name='Jakayla Toney1' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
        </StyledBox>
        <StyledBox>
          <Card name='Jakayla Toney' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          <Card name='Jakayla Toney2' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1578961771886-97d51aee46bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=718&q=80' />
        </StyledBox>
        <StyledBox>
          <Card name='Jakayla Toney' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          <Card name='Jakayla Toney3' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
        </StyledBox>
        <StyledBox>
          <StyledAside>
            <img src='https://via.placeholder.com/75' alt='sheesh' />
            <h3>Nom, Prénom</h3>
            <p> Edit Profile</p>
          </StyledAside>
          <StyledBox>
            <StyledMenu color='black'>
              <Setting />
              <p>
                General
              </p>
            </StyledMenu>
            <StyledMenu color='black'>
              <Option />
              <p>
                Preferences
              </p>
            </StyledMenu>
            <StyledMenu color='black'>
              <Bell />
              <p>
                Notifications
              </p>
            </StyledMenu>
            <StyledMenu color='black'>
              <Contact />
              <p>
                Contact Us
              </p>
            </StyledMenu>
            <StyledMenu color='black'>
              <Legal />
              <p>
                Legal Mentions
              </p>
            </StyledMenu>
            <StyledMenu color='#E67E22'>
              <LogOut />
              <p>
                Log Out
              </p>
            </StyledMenu>
          </StyledBox>
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
const StyledAside = styled.aside`
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > img {
    display: flex;
    justify-self: center;
    width: 75px;
    border-radius: 50px;
    border : 2px solid #2E1805;
  }
  > p {
    color: #E67E22;
    font-weight: 700;
    margin: 0;
  }
  > h3{
    font-family: 'Nunito';
    font-size: 21px;
    font-weight: 700;
    color: #2E1805;
    margin: 0;
  }
`
const StyledMenu = styled.span`
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Open Sans' serif;
  font-weight: 600;
  font-size: 18px;
  margin: ${({ color }) => (color === '#E67E22' ? '50px 0px 0px 0px' : '15px 0px')}; 
  > p {
    margin: 0 auto 0 0;
    text-align: left;
    color: ${({ color }) => color}
  }
`
const SignInCarrousel = styled.section`
  display: flex;
  justify-self: flex-start;
  flex-direction: row;
  height: inherit;
  width: 400%;
  transform: translateX(12.5%);
  animation: ${({ curr, next }) => (slide(37.5 - (curr - 1) * 25, 37.5 - (next - 1) * 25))}  0.3s ease-in-out forwards; 
`

const StyledBox = styled.section`
  display: flex;
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
  animation: ${({ curr, next }) => (next === 4 ? slide(0, -100) : (curr === 4 && next !== 4 ? slide(-100, 0) : ''))}  0.3s ease-in-out forwards; 
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
