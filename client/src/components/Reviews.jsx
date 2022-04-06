import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadReviews } from '../store/actions/LocationActions'

const mapStateToProps = ({ reviewsState }) => {
  return { reviewsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (id) => dispatch(LoadReviews(id))
  }
}

const Reviews = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchReviews(id)
  }, [id])
  console.log(props.reviewsState)

  if(props.reviewsState.reviews.location) {
    return (
    <ul>
      {props.reviewsState.reviews.location.description} 
      {props.reviewsState.reviews.location.name}
      <img src={props.reviewsState.reviews.location.image}/>     

    </ul>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)