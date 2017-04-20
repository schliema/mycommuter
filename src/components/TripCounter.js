import React, { PropTypes } from 'react'

const TripCounter = ({counter}) => (
  <h1>{counter}</h1>
)

TripCounter.propTypes = {
  counter: PropTypes.number.isRequired
}

export default TripCounter