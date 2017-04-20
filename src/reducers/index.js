import { combineReducers } from 'redux'
import { ADD_TRIP } from './actions'

function trips(state ={counter:0, trips:[]}, action) {
  switch(action.type) {
    case ADD_TRIP:
      let id = state.trips.length+1

      let trips =  state.trips

      let myTrips = [
        ...trips,
        {
          id,
          text: action.text,
          distance: action.distance
        }
      ]

      let myCounter = state.counter + action.distance

      return {
        counter: myCounter,
        trips: myTrips
      }

    default:
      return state
  }
}

const tripApp = combineReducers({
  trips
})

export default tripApp