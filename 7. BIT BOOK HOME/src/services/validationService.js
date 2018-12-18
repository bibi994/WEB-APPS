class ValidationService {

    validateVideoPost(url) {
        if (url !== undefined || url !== '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length === 11) {
                return `https://www.youtube.com/embed/${match[2]}?autoplay=0`;
            }
            else {
                return false;
            }
        }
    }

    validateImagePost(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
}

export const validateService = new ValidationService();