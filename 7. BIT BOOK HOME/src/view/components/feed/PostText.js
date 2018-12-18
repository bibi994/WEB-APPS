import React from 'react';
import { Link } from 'react-router-dom';
import PostCountComment from './PostCountComment';
import PostDelete from './PostDelete';

import './css/PostText.css'

const PostText = ({ post, deletePost, userId }) => {
    return (
        <>
            <div className="card container pt-2 mt-2 mb-2">
                {userId == post.userId
                    ? <div className="card-body p-0 m-2">
                        <PostDelete deletePost={deletePost} />
                    </div>
                    : <div></div>
                }
                <Link to={`post/textposts/${post.id}`}><div className="card-body p-0 m-2">

                    <blockquote className="post-text">
                        {post.content}
                    </blockquote>

                    <PostCountComment postType={post.type} numComment={post.commentsNum} />
                </div>
                </Link>
            </div >
        </>
    )
}

export default PostText;