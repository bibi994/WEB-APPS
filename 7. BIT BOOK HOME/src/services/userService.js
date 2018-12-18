import User from '../models/User';
import { apiService } from './apiService';

class UserService {

    fetchUsers() {
        return apiService.get('users')
            .then((userObj) => userObj.map((user) => {
                const { id, name, aboutShort, lastPostDate, avatarUrl } = user;

                return new User(id, name, aboutShort, lastPostDate, avatarUrl);
            }))
    };

    fetchMyProfile() {
        return apiService.get('profile')
            .then(((user) => {
                const { userId, name, aboutShort, lastPostDate, avatarUrl, email, about, postsCount, commentsCount } = user;
                return new User(userId, name, aboutShort, lastPostDate, avatarUrl, email, about, postsCount, commentsCount);
            }))
    }

    fetchSingleUser(userId) {
        return apiService.get(`users/${userId}`)
            .then(((user) => {
                console.log(user);
                const { userId, name, aboutShort, lastPostDate, avatarUrl, email, about, postsCount, commentsCount } = user;
                return new User(userId, name, aboutShort, lastPostDate, avatarUrl, email, about, postsCount, commentsCount);
            }))
    }

}

export const userService = new UserService();