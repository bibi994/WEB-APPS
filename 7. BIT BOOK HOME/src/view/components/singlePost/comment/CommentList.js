import React, { Component } from 'react';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { postService } from '../../../../services/postService';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    loadComments() {
        postService.fetchComments(this.props.postId)
            .then((comments) => {
                this.setState({
                    comments
                })
                console.log(this.state.comments);
            })

    }

    componentDidMount() {
        this.loadComments()

    }

    componentWillUpdate() {

    }

    render() {

        if (!this.state.comments.length) {
            return (
                <>
                    <CommentInput postId={this.props.postId} />
                    <p className="mt-3 ml-auto mr-auto"> There are no comments...</p>
                </>
            )
        }
        const commentItem = this.state.comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />
        })
        return (
            <>
                <CommentInput postId={this.props.postId} />
                {commentItem}
            </>
        )
    }
}
export default CommentList;