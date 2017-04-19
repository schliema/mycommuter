import React, { PropTypes } from 'react'

const Trip = ({text,distance}) => (
  <li>{text} - {distance}</li>
)

Trip.propTypes = {
  text: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired
}

export default Trip