import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLocations } from '../store/actions/LocationActions'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())
  }
}

const Locations = (props) => {


  useEffect(() => {
    props.fetchLocations()
  }, [])

  console.log(props.locationState.locations)
  return (
    <div>
      {/* {props.locationState.map((location) => (
        <ul key={location._id}>
          <Link to={`/location-list/${location._id}`}>{location.title}/></Link>

        </ul>
      ))} */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)