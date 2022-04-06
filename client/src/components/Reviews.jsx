import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadReviews } from '../store/actions/MovieActions'

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
  },[id])
console.log(props.reviewState.review)
  return (
    <ul>
        {props.reviewState.review.description}
      {/* {props.movieDetailsState.movieDetails.map((movie) => (
          <li key={movie.id}>{movie.overview}</li>
        ))} */}
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)