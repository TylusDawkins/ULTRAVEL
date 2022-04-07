import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { WriteReview, AuthorReview } from '../store/actions/LocationActions'

const mapStateToProps = ({ formState }) => {
    return { formState }
    console.log(formState)
}


const mapDispatchToProps = (dispatch) => {
    return {
        createReview: () => dispatch(WriteReview()),
        createAuthor: () => dispatch(AuthorReview())
    }
}




const AddReviewForm = (props) => {


const onSubmit = (e) => {
    e.preventDefault()
    props.createReview()
}

const handleChange = (event) => {
    // props.formState({...props.formState, [event.target.author]: event.target.value})
    props.createAuthor({...props.formState, [props.formState.author]: event.target.value})
}

console.log(props.formState)
    return (
        <div className="form-wrapper">
            <h1>Leave a Review!</h1>
            <br />
            <form onSubmit={onSubmit}>
                <div>
                    <label><b>Author</b></label>
                    <input
                        type="text"
                        value={props.formState.author}
                        placeholder="Enter your name..."
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label><b>Rating</b></label>
                    <input
                        type="text"
                        value={props.formState.rating}
                        name={props.formState.rating}
                        placeholder="Enter rating out of 5..."
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label><b>Review</b></label>
                    <input
                        type="text"
                        value={props.formState.text}
                        name={props.formState.text}
                        placeholder="Enter your review..."
                        onChange={handleChange}
                    />
                </div>
                <div className="button-wrapper">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (AddReviewForm)