import styled from 'styled-components'
import GlobalFonts from '../style/fonts'
import { ReactComponent as Musician } from '../musician.svg'
import { ReactComponent as Logo } from '../MUSEEK.svg'
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
      <Logo style={{ marginBottom: '0px' }} />
      <h1>
        END YOUR SOLOIST CAREER
      </h1>
      <Musician style={{ margin: '100px 0px' }} />
      <Button color='#2E1805' active='true' content='GET STARTED' onClick={(e) => handleClick(e, 'sign')} />
      <a onClick={(e) => handleClick(e, 'log')} href="">
        Login to your Account
      </a>
    </HomeBox>
  )
}

const HomeBox = styled(AppBox)`
  justify-content: flex-start;
  column-gap: 10px;
  > svg {
    margin: 4rem 0rem;
  }
  > h1 {
    font-weight: 400;
    margin: 0;
    font-size: 15px;
    margin-top: 1em;
    width: auto;
  }
  > a{
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    margin-top: 16px;
    margin-bottom: 1em;
  }
`
export default Home
