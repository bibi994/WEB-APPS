import React from 'react';

import './css/Comment.css'


const CommentItem = ({ comment }) => {
    return (
        <div class="comment-item">
            <div class="clearFix">
                <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="profile" />
                <h4>{comment.authorName}</h4>
                <p className="">{comment.body}</p>
            </div>
        </div>
    )
}
export default CommentItem;
