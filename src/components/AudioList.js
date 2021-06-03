import React, { useState } from 'react'
import Audio from './Audio'
const AudioList = () => {
  const [List, setList] = useState([
    { title: 'Audio n°1', duration: '00:30' },
    { title: 'Audio n°2', duration: '00:30' },
    { title: 'Audio n°3', duration: '00:30' },
    { title: 'Audio n°4', duration: '00:30' },
    { title: 'Audio n°5', duration: '00:30' },
    { title: 'Audio n°6', duration: '00:30' },
    { title: 'Audio n°7', duration: '00:30' },
    { title: 'Audio n°8', duration: '00:30' },
    { title: 'Audio n°9', duration: '00:30' },
    { title: 'Audio n°10', duration: '00:30' },
    { title: 'Audio n°11', duration: '00:30' },
    { title: 'Audio n°12', duration: '00:30' },
    { title: 'Audio n°13', duration: '00:30' },
    { title: 'Audio n°14', duration: '00:30' }
  ])
  const handleDelete = (title, duration) => {
    const newList = [...List]
    setList(newList.filter(audio => audio.title !== title))
  }
  return (
    <>
      {
        List.map(audio =>
          <Audio
            key={audio.title}
            title={audio.title}
            duration={audio.duration}
            handleDelete={() => handleDelete(audio.title, audio.duration)}
          />)
      }
    </>
  )
}
export default AudioList
