import React, { createRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as Cross } from '../cross.svg'
import { ReactComponent as Heart } from '../heart.svg'
import TinderCard from 'react-tinder-card'

const Card = ({ name, age, rule, image }) => {
  const CardRef = createRef()
  const handleLike = () => CardRef.current.swipe('right')
  const handleRefuse = () => CardRef.current.swipe('left')
  return (
    <TinderCard flickOnSwipe={false} ref={CardRef}>
      <CardDiv image={image}>
        <CardMain>
          <CardSect>
            <div>
              <h3>
                {
                  name
                }
              </h3>
              <p>
                {
                  age + ', ' + rule
                }
              </p>
            </div>
            <ButtonDiv>
              <CardButton onClick={() => handleRefuse()}>
                <Cross />
              </CardButton>
              <CardButton onClick={() => handleLike()}>
                <Heart />
              </CardButton>
            </ButtonDiv>
          </CardSect>
        </CardMain>
      </CardDiv>
    </TinderCard>
  )
}
const CardDiv = styled.div`
  display: block;
  max-width: 355px;
  min-height: 600px;
  max-height: 600px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(${props => props.image});
  background-size: cover;
  border-radius: 20px;
  width: inherit;
  height: inherit; 
`
const CardMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 300%;
  width: inherit;
  z-index: 0;
`
const CardSect = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 33.33%;
  color: white;
  h3{
    color: white;
    font-family: 'Open Sans' serif;
    font-weight: 600;
    font-size: 22px;
    margin: 5px;
  }
  p{
    text-align: center;
    font-family: 'Open Sans' serif;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 15px;
  }
`
const CardButton = styled.div`
  display: grid;
  place-items: center;
  padding: 20px;
  border-radius: 50px;
  background: #FFFFFF;
  cursor: pointer;
`
const ButtonDiv = styled.div`
  display: flex;
  gap: 12px;
`
export default Card
