import * as data from './data.js';
import * as ui from './ui.js';

const init = () => data.fetchData(handlerSuccess, handlerError);

const handlerSuccess = () => {
    const post = data.getPost(0);
    const allPosts = data.getAllPosts();
    // ui.displayList(post);
    ui.displayAllPosts(allPosts);
}
const handlerError = (error) => console.log(error);

export { init }