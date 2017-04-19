import React, { PropTypes } from 'react'
import Trip from './Trip'

const TripList = ({trips}) => (
  <ol>
    {trips.map(aTrip =>
    <Trip
      key={aTrip.id}
      text={aTrip.text}
      distance={aTrip.distance}/>
    )}
  </ol>
)

export default TripList