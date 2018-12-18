import React from 'react';
import { Link } from 'react-router-dom';
import PostCountComment from "./PostCountComment";
import PostDelete from "./PostDelete";

const PostImage = ({ post, deletePost, userId }) => {
  return (
    <div className="card container pt-2 mt-2 mb-2">
      {userId == post.userId
        ? <div className="card-body p-0 m-2">
          <PostDelete deletePost={deletePost} />
        </div>
        : <div></div>
      }
      <Link to={`post/imageposts/${post.id}`}>
        <div className="card-body p-0 m-2">
          <img className="card-img mb-3" src={post.content} alt="Card cap" />
          <PostCountComment postType={post.type} numComment={post.commentsNum} />
        </div>
      </Link>
    </div>
  );
};

export default PostImage;