const dateFormat = (datePost) => {
    let today = new Date().getDate();
    let date = new Date(datePost);

    if (datePost === null) {
        return
    }
    if (date === today) {
        let hour = date.getHours();
        let min = date.getMinutes();

        return `Last post at ${hour}:${min}`
    } else {
        let dateOfPost = date.toLocaleDateString();
        let hour = date.getHours();
        let min = date.getMinutes();

        return `Last post at ${dateOfPost} - ${hour}:${min}`
    }
}
export default dateFormat