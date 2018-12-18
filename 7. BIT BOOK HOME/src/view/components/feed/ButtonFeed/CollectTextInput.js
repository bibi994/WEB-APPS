import $ from 'jquery';
import { postService } from '../../../../services/postService'

const collectTextInput = () => {
    const inputVal = $('#post-text').val();
    const type = 'TextPosts'
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
}

export { collectTextInput }