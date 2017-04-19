export const ADD_TRIP = 'ADD_TRIP'

export function addTrip(text, distance) {
  return { type: ADD_TRIP, text, distance }
}