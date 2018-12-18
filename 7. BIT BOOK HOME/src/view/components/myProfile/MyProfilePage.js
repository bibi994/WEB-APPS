import React, { Component } from 'react';
import { MyProfilePicAndName } from './MyProfilePicAndName';
import { MyProfileDesc } from './MyProfileDesc';
import { MyProfileCount } from './MyProfileCount';
import { userService } from '../../../services/userService';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {

        userService.fetchMyProfile()
            .then(((user) => {
                console.log(user);
                this.setState({ user })
            }))

    }
    render() {
        if (!this.state.user) { return null }
        const { user } = this.state;
        return (
            <>
                <MyProfilePicAndName name={user.name} img={user.img} />
                < MyProfileDesc about={user.about} aboutShort={user.aboutShort} />
                <MyProfileCount commentsCount={user.commentsCount} postsCount={user.postsCount} />
            </>
        )
    }
}

export { MyProfile }