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

    const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500'
  useEffect(() => {
    props.fetchLocations()
  }, [])

  console.log(props.locationsState.locations)
  return (
    <div>
      {props.locationState.locations.map((location) => (
        <ul key={location._id}>
          <Link to={`/location-list/${location._id}`}>{location.title} <img src={`${IMAGE_BASE_PATH}${location.poster_path}`}/></Link>
          
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)