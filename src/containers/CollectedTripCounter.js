import { connect } from 'react-redux'
import TripCounter from '../components/TripCounter'
import { doCount } from '../reducers/actions'

const mapStateToProps = (state) => {
  return {
    counter: state.trips.counter
  }
}

const CollectedTripCounter = connect(
  mapStateToProps,
  undefined
)(TripCounter)



export default CollectedTripCounter