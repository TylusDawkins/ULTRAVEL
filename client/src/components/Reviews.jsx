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
  console.log(props.reviewsState.reviews)

  if(props.reviewsState.reviews.reviews) {
  return (
    <ul>
      {props.reviewsState.reviews.reviews[0].text}

    </ul>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)