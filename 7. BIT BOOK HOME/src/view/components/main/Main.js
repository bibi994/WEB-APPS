import React from 'react';
import PostList from './../feed/PostList'
import { Route, Switch } from 'react-router-dom';
import SinglePost from '../singlePost/SinglePost';
import { MyProfile } from '../myProfile/MyProfilePage'
import { UserProfile } from '../myProfile/UserProfile'
import UserList from '../people/UserList';

const Main = () => {
    return (
        <main className="container mt-5">
            <Switch>
                <Route path="/post/:type/:postId" component={SinglePost} />
                <Route path="/profile/:userId" component={UserProfile} />
                <Route path="/myprofile" component={MyProfile} />
                <Route path="/people" component={UserList} />
                <Route path="/" component={PostList} />
            </Switch>
        </main>
    )
}



export default Main