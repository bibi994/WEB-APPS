import $ from 'jquery';
import { postService } from '../../../../services/postService'

const collectImageInput = () => {
    const inputVal = $('#post-image').val();
    const type = 'ImagePosts';

    const inputData = {

        "imageUrl": inputVal,
        "dateCreated": "2018-11-29T14:07:14.370Z",
        "userId": 0,
        "userDisplayName": "string",
        "type": "image"

    }

    postService.postData(type, inputData)
        .then((response) => {
            console.log(response);
        })

}
export { collectImageInput }