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
  // console.log(props.reviewsState.reviews)

  if (props.reviewsState.reviews.reviews) {
    return (
      <div>
        <ul>
          {props.reviewsState.reviews.reviews[0].text}
          {props.reviewsState.reviews.reviews[0].author}



        </ul>
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)