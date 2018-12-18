import * as data from "./data.js";
import * as ui from "./ui.js";

const init = () => {
    data.fetchPosts(onSuccess);

}

const onSuccess = (posts) => {
    ui.print(posts);
}
export { init };