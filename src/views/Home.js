import styled from 'styled-components'
import GlobalFonts from '../style/fonts'
import { ReactComponent as Musician } from '../musician.svg'
import Button from '../components/Button'
import { AppBox } from '../style/GlobalStyles'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
function Home() {
  const [Log,setLog] = useState(false)
  const [Sign,setSign] = useState(false)
  const handleClick = (e, type) => {
    e.preventDefault()
    if (type === 'log') setLog(true)
    if (type === 'sign') setSign(true)
  }
  if (Sign) {
    return <Redirect push to='/sign' />
  }
  return (
    <HomeBox>
      <GlobalFonts />
      <img src='logo.png' alt='Logo de l app' />
      <Musician />
      <h1>
        NO MORE <br /> LONELY DAYS
      </h1>
      <Button onClick={(e) => handleClick(e, 'sign')} />
      <a onClick={(e) => handleClick(e, 'log')} href="">
        login with email
      </a>
    </HomeBox>
  )
}

const HomeBox = styled(AppBox)`
  > img{
    display: flex;
    height: 80px;
  }
  > svg {
    display: flex;
    height: 220px;
    justify-self: center;
    flex: 0 1 auto;
    margin-top: 4rem;
  }
  > h1 {
    font-weight: 900;
    font-style: italic;
    text-align: center;
    margin: 0;
    font-size: 3em;
    margin-bottom: 2em;
  }
  > a{
    color: inherit;
    text-decoration: none;
    margin-bottom: 1em;
  }

`
export default Home
