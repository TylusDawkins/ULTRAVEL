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

  return (
    <div>
      {props.locationState.locationList.map((location) => (
        
        <ul key={location._id}>
          <Link to={`/locations-list/${location._id}`}>{location.name} <img src={location.image}/></Link>

        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)