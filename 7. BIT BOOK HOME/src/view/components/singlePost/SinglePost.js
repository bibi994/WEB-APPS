import React, { Component } from 'react';
import PostItem from '../feed/PostItem';
import CommentList from './comment/CommentList';
import { postService } from '../../../services/postService'
import { userService } from '../../../services/userService'

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            userId: null
        }
    }

    componentDidMount() {
        const type = this.props.match.params.type;
        const postID = this.props.match.params.postId;
        postService.fetchSinglePost(type, postID)
            .then((post) => {
                this.setState({ post })
            })

        this.setState({
            userId: localStorage.getItem("userId")
        })


    }

    render() {
        if (!this.state.post) { return null }
        if (!this.state.userId) { return null }

        return (
            <>
                <div className="col-8 offset-md-2">
                    <PostItem post={this.state.post} userId={this.state.userId} />
                    <CommentList postId={this.props.match.params.postId} />
                </div>
            </>
        )
    }
}

export default SinglePost