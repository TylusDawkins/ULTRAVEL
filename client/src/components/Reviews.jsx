import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadReviews } from '../store/actions/LocationActions'
import { Link } from 'react-router-dom'

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
  // console.log(props.reviewsState.reviews)

  if (props.reviewsState.reviews.reviews) {
    return (
      <div>
        <ul>
          <li>Traveler: {props.reviewsState.reviews.reviews[0].author}</li>
          <li>Rating: {props.reviewsState.reviews.reviews[0].rating}</li>
          <li>Review: {props.reviewsState.reviews.reviews[0].text}</li>
        </ul>
        <Link to='/locations-list/:id/addreview'>Add a review</Link>
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)