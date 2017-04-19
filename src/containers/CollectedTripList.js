import { connect } from 'react-redux'
import TripList from '../components/TripList'

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

const CollectedTripList = connect(
  mapStateToProps,
  undefined
)(TripList)

export default CollectedTripList