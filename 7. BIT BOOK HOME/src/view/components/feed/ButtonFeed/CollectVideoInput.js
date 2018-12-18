import $ from 'jquery';
import { postService } from '../../../../services/postService'

const collectVideoInput = () => {
    const inputVal = $('#post-video').val();
    const type = 'VideoPosts';
    const inputData = {

        "videoUrl": inputVal,
        "dateCreated": new Date(),
        "userId": 0,
        "userDisplayName": "string",
        "type": "video"

    }

    postService.postData(type, inputData)
        .then((response) => {
            console.log(response);
        })

}
export { collectVideoInput }