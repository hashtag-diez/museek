import React, { useState, createRef } from 'react'
import { AppBox } from '../style/GlobalStyles'
import { Progress } from 'antd'
import styled, { keyframes } from 'styled-components'
import { Redirect } from 'react-router-dom'
import Button from '../components/Button'
import '../style/Signin.css'
import { ReactComponent as Logo } from '../MUSEEK.svg'
import Title from '../components/Title'
import Input from '../components/Input'
import Selector from '../components/Selector'
import Tag from '../components/Tag'
import { ReactComponent as Browser } from '../browser.svg'
import { ReactComponent as Camera } from '../camera.svg'
import { ReactComponent as Track } from '../audiotrack.svg'
import { ReactComponent as Micro } from '../mic-full.svg'
import { ReactComponent as Folders } from '../Folders.svg'


import 'antd/dist/antd.css'

const Signin = () => {
  const [Progress, setProgress] = useState(0)
  const [Leave, setLeave] = useState(false)
  const [Type, setType] = useState('')
  const [Active, setActive] = useState('false')
  const [ShowIcon, setShowIcon] = useState(false)
  const list = ['Percussion', 'Electric Guitar', 'Bass Guitar', 'Acoustic Guitar',
    'Piano', 'Strings', 'Brass', 'Bass', 'Bowed Strings', 'Chord', 'Drums', 'Flute',
    'Guitar', 'Mallet Instruments', 'Organ', 'Plucked Strings', 'Reed Instruments',
    'Synth Pad', 'Vocal', 'Violon', 'Clarinet', 'Cello', 'Xylophone', 'String Instrument',
    'DJ', 'Beatmaker']
  const options = ['🎓  Improve my music skills and learn', '🎵  Form a group and play together', '🤝    Meet people and make new friends', '❤️   Find love']
  const [Infos, setInfos] = useState({
    0: {
      FullName: '',
      Mail: '',
      Stage: '',
      Gender: '',
      Birthdate: ''
    },
    16.67: {
      Tags: []
    },
    33.34: {
      Choice: ''
    },
    50.01: {
      Image: '',
      Bio: ''
    },
    66.68: {
      Sound: 'Y"a rien',
      Title: ''
    }
  })
  const IconPreview = createRef()
  const completeCheck = (field) => {
    const page = Infos[field]
    let notComplete = false
    Object.keys(page).forEach(info => {
      if (page[info] === '' || page[info].length === 0) notComplete = true
    })
    if (notComplete) {
      setActive('false')
    } else {
      setActive('true')
    }
  }
  const handleChange = (field, key, value) => {
    const newInfos = { ...Infos }
    if (field === 16.67) {
      const newTags = [...Infos[16.67].Tags]
      console.log(newTags)
      let unique = true
      for (let i = 0; i < newTags.length; i++) {
        if (newTags[i] === value) {
          newTags.splice(i, 1)
          unique = false
          console.log('Pas d ajout !', newTags)
        }
      }
      if (unique) {
        newTags.push(value)
        console.log('Ajout !')
      }  
      newInfos[16.67].Tags = newTags
      console.log(newTags)
    } else {
      newInfos[field][key] = value
    }
    setInfos(newInfos)
    completeCheck(field)
  }
  const handleUpload = (e, field, key) => {
    const icon = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (key === 'Image') {
        IconPreview.current.src = reader.result
        setShowIcon(true)
        localStorage.setItem('icon', reader.result)
      }
      handleChange(field, key, reader.result)
      console.log('Good')
    }
    reader.readAsDataURL(icon)
  }
  const handleDelete = () => {
    setShowIcon(false)
    localStorage.removeItem('icon')
  }
  const handlePrev = () => {
    if (Progress === 0) {
      setLeave(true)
    } else {
      let next = Progress - 50/3
      completeCheck(parseFloat(next.toFixed(2)))
      setProgress(parseFloat(next.toFixed(2)))
      setType('out')
    }
  }
  const handleNext = () => {
    if (Progress === 83.35) {
      setLeave(true)
    }
    let next = Progress + 50/3
    if (Progress < 66.68) completeCheck(parseFloat(next.toFixed(2)))
    setProgress(parseFloat(next.toFixed(2)))
    setType('in')
  }
  if (Leave && Progress > 0) {
    return <Redirect push to='/app' />
  }
  if (Leave) {
    return <Redirect push to='/' />
  }
  return (
    <StyledAppBox>
      <ProgressBar trailColor='#bdc3c7' strokeColor='#E67E22' percent={Progress + 10} showInfo={false} />
      <Logo style={{ height: '30px', alignSelf: 'center', margin: '10px 0px' }} />
      <SignInCarrousel curr={Progress} type={Type}>
        {/* 0 */}
        <SigninBox>
          <Title header='Musician Identity' detail='Tell me more about yourself' />
          <Input onChange={(e) => handleChange(0, 'FullName', e.target.value)} placeholder='Full Name' />
          <Input onChange={(e) => handleChange(0, 'Mail', e.target.value)} placeholder='Mail Address ' />
          <Input onChange={(e) => handleChange(0, 'Stage', e.target.value)} placeholder='Stage Name (optionnal)' />
          <Selector onChange={(e) => handleChange(0, 'Gender', e.target.value)} options={['Gender', 'Male', 'Female', 'Other']} />
          <Input onChange={(e) => handleChange(0, 'Birthdate', e.target.value)} placeholder='Birthdate (DD/MM/YYYY)' /> 
        </SigninBox>
        {/* 16.67 */}
        <SigninBox>
          <Title header='Experience' detail='Show me what you got' />
          <h4>Description Tags</h4>
          <p>Tip : The more you add, the better !</p>
          <TagDiv>
            {
              Object.keys(list).map(instrument => (
                <Tag key={instrument} onChange={() => handleChange(16.67, 'Tags', list[instrument])} type='extended' content={list[instrument]} />
              ))
            }
          </TagDiv>
        </SigninBox>
        {/* 33.34 */}
        <SigninBox>
          <Title header='The Project' detail="Now it's getting serious" />
          <h4>Main Objective</h4>
          <p>It help us to find the best matching persons !</p>
          <TagDiv>
            {
              Object.keys(options).map(opt => (
                <Tag key={opt} choice={Infos[33.34].Choice} onChange={() => handleChange(33.34, 'Choice', options[opt])} type='' content={options[opt]} />
              ))
            }
          </TagDiv>
        </SigninBox>
        {/* 50.01 */}
        <SigninBox>
          <Title header='Your Profile' detail='Build your online presence' />
          <h4>Image</h4>
          <p>It will appear puclicly</p>
          <StyledMain image={`${ShowIcon}`}>
            <div>
              <img ref={IconPreview} src="https://via.placeholder.com/1000" alt=""/>
              <h4 onClick={() => handleDelete()} style={{ color: '#E67E22' }}> Delete </h4>
            </div>
            <div>
              <Camera />
              <input type="file" accept=".jpg,.jpeg,.png" name="" id=""/>
              <label for="file">Take a picture</label>
            </div>
            <p>or</p>
            <div>
              <Browser />
              <input onChange={(e) => handleUpload(e, 50.01, 'Image')} accept=".jpg,.jpeg,.png" type="file" name="" id=""/>
              <label for="file">Browse gallery</label>
            </div>
          </StyledMain>
          <h4>Bio</h4>
          <StyledTextArea onChange={(e) => handleChange(50.01, 'Bio', e.target.value)} placeholder='I’ve been playing Piano for...' />
        </SigninBox>
        {/* 66.68 */}
        <SigninBox>
          <Title header='First Audio' detail='Showcase yourself !' />
          <h4>Record</h4>
          <p>It will appear puclicly</p>
          <StyledMain>
            <div>
              <Micro />
              <input type="file" accept=".mp3" name="" id=""/>
              <label for="file">Record myself</label>
            </div>
            <p>or</p>
            <div>
              <Folders />
              <input onChange={(e) => handleUpload(e, 66.68, 'Sound')} accept=".mp3" type="file" name="" id=""/>
              <label for="file">Browse phone</label>
            </div>
          </StyledMain>
          <h4>Title</h4>
          <Input onChange={(e) => handleChange(66.68, 'Title', e.target.value)} placeholder='Fly me to the moon - Frank Sinatra' />
        </SigninBox>
        {/* 83.35 */}
        <SigninBox style={{ alignItems: 'flex-start' }}>
          <Title header='Summary' detail="Make sure everything's good" />
          <StyledSpan>
            <h4>Identity</h4>
            <p>
              {
                Object.keys(Infos[0]).map
              }
            </p>
          </StyledSpan>
          <StyledSpan>
            <h4>Experience</h4>
            <p>
              {
                Infos[16.67].Tags.toString()
              }
            </p>
          </StyledSpan>
          <StyledSpan>
            <h4>Project</h4>
            <p>
              {
                Infos[33.34].Choice 
              }
            </p>
          </StyledSpan>
          <StyledSpan>
            <h4>Profile</h4>
          </StyledSpan>
          <StyledSpan>
            <h4>Audio</h4>
            <Track />
          </StyledSpan>
        </SigninBox>
      </SignInCarrousel>
      <Buttons>
        <Button onClick={() => handlePrev()} color='rgba(46,24,5,0.4)' active='true' content='Previous' />
        <Button onClick={() => handleNext()} color='#E67E22' active={Active} content='Next' />
      </Buttons>
      {/* <Button active={completed[Progress]} content='CONTINUER' onClick={() => { if (completed[Progress] === 'true') setProgress(Progress + 20) }} /> */}
    </StyledAppBox>
  )
}
const slide = (a, b) => keyframes`
  from {
    transform: translateX(-${a}%);
  }
  to {
    transform: translateX(-${b}%);
  }
`
const TagDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: inherit;
  margin-top: 15px;
  overflow-y: auto;
  max-height: 380px;
`
const Buttons = styled.div`
  display: flex;
  width: auto;
  font-family:'Nunito';
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 44px;
  border-top: 1px solid rgba(0,0,0,0.1);
  align-self: center;
  button{
    width: 153px;
    padding: 10px 1px;
  }
`
const SignInCarrousel = styled.section`
  display: flex;
  flex-direction: row;
  height: inherit;
  width: 600%;
  animation: ${({ curr, type }) => (type === 'in' ? slide(curr - 16.67, curr) : (type === 'out' ? slide(curr + 16.67, curr) : ''))} 0.3s ease-in-out forwards;
`
const StyledAppBox = styled(AppBox)`
  justify-content: space-around;
  align-items: flex-start;
`
const ProgressBar = styled(Progress)`
  width: 100%;
  height: 30px;
`
const StyledMain = styled.main`
  display: flex;
  padding: ${(props) => (props.image === 'true' ? '10px 0px 10px 0px' : '40px 0px 20px 0px')};
  gap: ${(props) => (props.image === 'true' ? '' : '40px')};
  font-weight: 600;
  img{
    display: ${(props) => (props.image === 'true' ? 'block' : 'none')};
    border-radius: 50%;
    border: ${(props) => (props.image === 'true' ? '3px solid black' : 'none')} ;
    min-height: 100px;
    max-height: 100px;
    min-width: 100px;
    max-width: 100px;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: ${(props) => (props.image === 'true' ? '0px 10px' : '0')};
  }
  input{
    width: 113px;
    height: 54px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    cursor: pointer;
  }
  label{
    cursor: pointer;
    text-align: center;
  }
  p{
    display: flex;
    align-items: center;
  }
  h4{ 
    display: ${(props) => (props.image === 'true' ? 'block' : 'none')};
    margin: 05px 0px;
  }
`
const StyledSpan = styled.span`
  p {
    font-family: 'Nunito';
    text-align: start;
    font-weight: 400;
    letter-spacing: 1px;
    color: #AFA79F;
    width: inherit;
    margin: 0;
  }
`
const SigninBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 0px 20px;
  font-weight: 800;
  > h1 {
    font-size: 9em;
  }
  > h4 {
    font-family: 'Nunito';
    text-align: start;
    font-weight: 400;
    letter-spacing: 1px;
    width: inherit;
    margin: 0;
  }
  > p{
    font-family: 'Nunito';
    text-align: start;
    font-weight: 400;
    letter-spacing: 1px;
    color: #AFA79F;
    width: inherit;
    margin: 0;
  }
  span{
    margin: 0px 15px;
  }
`
const StyledTextArea = styled.textarea`
  display: block;
  font-family:'Nunito';
  font-size: 17px;
  height: 100%;
  width: inherit;
  border: none;
  outline: none;
  background-color: rgba(200,203,194,0.17);
  padding: 15px 0px;
  padding-left: 25px;
  padding-right: auto;
  border-radius: 25px;
  margin: 15px 0px;
  resize: none;
  ::placeholder{
    font-family:'Nunito';
    color: #AFA79F;
    font-size: 17px;
  }
`

export default Signin
