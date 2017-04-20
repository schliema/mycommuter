import React from 'react'
import AddTrip from '../containers/AddTrip'
import CollectedTripList from '../containers/CollectedTripList'
import CollectedTripCounter from '../containers/CollectedTripCounter'

const App = () => (
  <div>
    <AddTrip/>
    <CollectedTripList/>
    <CollectedTripCounter/>
  </div>
)

export default App