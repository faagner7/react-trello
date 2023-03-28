import './App.css'

import React, { useState } from 'react'
import Board from 'react-trello'

import data from './data'

function Trello() {
  const [state, setState] = useState({ boardData: data })

  const handleDragStart = (cardId, laneId) => {
    console.log('drag started')
    console.log(`cardId: ${cardId}`)
    console.log(`laneId: ${laneId}`)
  }

  const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended')
    console.log(`cardId: ${cardId}`)
    console.log(`sourceLaneId: ${sourceLaneId}`)
    console.log(`targetLaneId: ${targetLaneId}`)
  }

  const setEventBus = (eventBus) => {
    setState({ eventBus })
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h3>React Trello Demo</h3>
      </div>
      <div className='App-intro'>
        <Board
          data={state?.boardData || { lanes: [] }}
          draggable
          hideCardDeleteIcon
          eventBusHandle={setEventBus}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
      </div>
    </div>
  )
}

export default Trello
