import React from 'react'
import {connect} from 'react-redux'
import {addTrip} from '../reducers/actions'

let AddTrip = ({dispatch}) => {
  let text
  let distance

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        let distanceNumber = parseInt(distance.value)
        dispatch(addTrip(text.value, distanceNumber))
        text.value = ''
        distance.value = ''
      }}>
        <input ref={node => {
          text = node
        }} />
        <input ref={node => {
          distance = node
        }} />
        <button type="submit">
          Add Trip
        </button>
      </form>
    </div>
  )
}

AddTrip = connect()(AddTrip)

export default AddTrip