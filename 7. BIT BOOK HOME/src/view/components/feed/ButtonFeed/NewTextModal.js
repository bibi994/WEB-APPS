import React, { Fragment, Component } from 'react';
import { postService } from '../../../../services/postService'

import './css/Modal.css';

class NewTextModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ""
        }
        this.changeInput = this.changeInput.bind(this);
        this.collectTextInput = this.collectTextInput.bind(this);
    }

    changeInput(event) {
        this.setState({
            inputValue: event.target.value

        })
    }
    collectTextInput() {
        const inputVal = this.state.inputValue;
        const type = 'TextPosts';

        const inputData = {

            "text": inputVal,
            "dateCreated": new Date(),
            "userId": 0,
            "userDisplayName": "string",
            "type": "text"

        }

        postService.postData(type, inputData)
            .then((response) => {
                console.log(response);
            })


        // window.location.href = "http://localhost:3000/";

    }
    render() {

        return (
            <Fragment>
                <div className="modal fade" id="textModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">New text post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Text</p>
                                <input onChange={this.changeInput} value={this.state.inputValue} type="text" className="col-12" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.collectTextInput} className="btn btn-primary">POST</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    };
}


export { NewTextModal }