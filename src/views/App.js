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
import styled from 'styled-components'
import Draggable from 'react-draggable'

const App = () => {
  const [Page, setPage] = useState(2)
  return (
    <StyledAppBox>
      <StyledHeader>
        <Heart />
        <Logo width="100"/>
        <Option />
      </StyledHeader>
      <footer>
        <Draggable
          axis="x"
          defaultPosition={{ x: 0, y: 0 }}

        >
          <StyledFooter>
            {
              (Page === 1 ? <MicroF /> : <Micro onClick={() => setPage(1)} />)
            }
            {
              (Page === 2 ? <HomeF /> : <Home onClick={() => setPage(2)} />)
            }
            {
              (Page === 3 ? <MessageF /> : <Message onClick={() => setPage(3)} />)
            }
            {
              (Page === 4 ? <SettingF /> : <Setting onClick={() => setPage(4)} />)
            }
          </StyledFooter>
        </Draggable>
      </footer>
    </StyledAppBox>
  )
}

const StyledAppBox = styled(AppBox)`
  justify-content: space-between;
  align-items: center;
`

const StyledHeader = styled.header`
  display: flex;
  width: inherit;
  padding: 15px;
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
  margin: 25px auto;
`

export default App
