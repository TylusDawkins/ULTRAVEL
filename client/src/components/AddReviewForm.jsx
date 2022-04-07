import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { WriteReview } from '../store/actions/LocationActions'

const mapStateToProps = ({ formState }) => {
    return { formState }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createReview: () => dispatch(WriteReview())
    }
}

// const handleChange = (key) = {

// }

const AddReviewForm = (props) => {
    return (
        <div className="form-wrapper">
            <h1>Leave a Review!</h1>
            <br />
            <form onSubmit={props.createReview}>
                <div>
                    <label><b>Author</b></label>
                    <input
                        type="text"
                        value={props.formState.author}
                        placeholder="Enter ride name..."
                        onChange={props.handleNameChange}
                    />
                </div>
                <div>
                    <label><b>Description:</b></label>
                    <input
                        type="text"
                        value={props.description}
                        placeholder="Enter description..."
                        onChange={props.handleDescriptionChange}
                    />
                </div>
                <div>
                    <label><b>Min Height:</b></label>
                    <input
                        type="text"
                        value={props.minHeight}
                        placeholder="Enter min height..."
                        onChange={props.handleMinHeightChange}
                    />
                </div>
                <div>
                    <label><b>Image:</b></label>
                    <input
                        type="text"
                        value={props.imagePath}
                        placeholder="Enter ride image path..."
                        onChange={props.handleImagePathChange}
                    />
                </div>
                <div className="button-wrapper">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddReviewForm