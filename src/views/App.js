import React, { useState } from 'react'
import { AppBox } from '../style/GlobalStyles'
import * as SVG from '../components/Imports'
import Card from '../components/Card'
import styled, { keyframes } from 'styled-components'
import Conversation from '../components/Conversation'
import AudioList from '../components/AudioList'

const App = () => {
  const [Page, setPage] = useState(2)
  const [Next, setNext] = useState(2)
  const handleCarrousel = (next) => {
    setNext(next)
    setTimeout(() => setPage(next), 300)
  }
  return (
    <StyledAppBox>
      <StyledHeader curr={Page} next={Next}>
        <SVG.Heart />
        <SVG.Logo width="100"/>
        <SVG.Option />
      </StyledHeader>
      <SignInCarrousel curr={Page} next={Next}>
        <StyledBox>
          <AudioList />
        </StyledBox>
        <StyledBox>
          <Card name='Jakayla Toney' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1603545908215-1010e64eb840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80' />
          <Card name='Jakayla Toney2' rule='guitarist' age='21' image='https://images.unsplash.com/photo-1578961771886-97d51aee46bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=718&q=80' />
        </StyledBox>
        <StyledBox gap='25px'>
          <Conversation name='Test1' image='https://pbs.twimg.com/profile_images/633633461283221504/7FUNqQ4H.jpg' />
          <Conversation name='Test2' image='https://pbs.twimg.com/profile_images/633633461283221504/7FUNqQ4H.jpg' />
        </StyledBox>
        <StyledBox>
          <StyledAside>
            <img src='https://via.placeholder.com/75' alt='sheesh' />
            <h3>Nom, Prénom</h3>
            <p> Edit Profile</p>
          </StyledAside>
          <StyledBox style={{ margin: '0', alignSelf: 'center' }}>
            <StyledMenu color='black'>
              <SVG.Setting />
              <p>
                General
              </p>
            </StyledMenu>
            <StyledMenu color='black'>
              <SVG.Option />
              <p>
                Preferences
              </p>
            </StyledMenu>
            <StyledMenu color='black'>
              <SVG.Bell />
              <p>
                Notifications
              </p>
            </StyledMenu>
            <StyledMenu color='black'>
              <SVG.Contact />
              <p>
                Contact Us
              </p>
            </StyledMenu>
            <StyledMenu color='black'>
              <SVG.Legal />
              <p>
                Legal Mentions
              </p>
            </StyledMenu>
            <StyledMenu color='#E67E22'>
              <SVG.LogOut />
              <p>
                Log Out
              </p>
            </StyledMenu>
          </StyledBox>
        </StyledBox>
      </SignInCarrousel>
      <StyledFooter page={Page}>
        {
          (Next === 1 ? <SVG.MicroF /> : <SVG.Micro onClick={() => handleCarrousel(1)} />)
        }
        {
          (Next === 2 ? <SVG.HomeF /> : <SVG.Home onClick={() => handleCarrousel(2)} />)
        }
        {
          (Next === 3 ? <SVG.MessageF /> : <SVG.Message onClick={() => handleCarrousel(3)} />)
        }
        {
          (Next === 4 ? <SVG.SettingF /> : <SVG.Setting onClick={() => handleCarrousel(4)} />)
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
  gap: 30px;
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
  max-height: 77vh;
  flex-direction: column;
  margin: 0px 30px;
  width: 90%;
  overflow: auto;
  ::-webkit-scrollbar {
    background: inherit;
    width: 7px;
    margin-left: 15px;
    transform: translateX(-10px);
  }
  ::-webkit-scrollbar-thumb {
    background: #AFA79F;
    border-radius: 10px;
  }
  gap: ${({ gap }) => (gap)};
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
  z-index: ${({ page }) => (page === 2 ? '4' : '')};
`

export default App
