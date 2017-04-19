import { combineReducers } from 'redux'
import { ADD_TRIP, addTrip } from './actions'

function trips(state =[], action) {
  switch(action.type) {
    case ADD_TRIP:
      let id = state.length+1
      return[
        ...state,
        {
          id,
          text: action.text,
          distance: action.distance
        }
      ]
    default:
      return state
  }
}

const tripApp = combineReducers({
  trips
})

export default tripApp