import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm"

export default function Comment() {

    let [comments, setComments] = useState([{
        userName: "John Doe",
        remarks: "Great product!",
        rating: 4
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    }

    return (
        <>
            <div>
                <h3>All Comments</h3>

                {/* <div className="comment">
                    <span>{comments[0].remarks}</span>
                    &nbsp;
                    <span>(Rating = {comments[0].rating})</span>
                    <p>- {comments[0].userName}</p>
                </div> */}

                {comments.map((comment, index) => {
                    return (
                        <div key={index} className="comment">
                            <span>{comment.remarks}</span>
                            &nbsp;
                            <span>(Rating = {comment.rating})</span>
                            <p>- {comment.userName}</p>
                        </div>
                    )
                })}
                
            </div>
            <hr />
            <CommentsForm addNewComment={addNewComment} />
        </>
    )
}