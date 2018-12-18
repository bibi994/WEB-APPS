import React from 'react';
import dateFormat from './../../../shared/dateFormat'

import "./css/people.css"

const UserItem = ({ user }) => {
    return (
        <>
            <div class="user-item col-8 offset-md-2">
                <div className="clearFix">
                    <img src={user.img} alt="profile" />
                    <div className="people-header">
                        <h4>{user.name}</h4>
                        <span class="badge badge-pill badge-primary">{dateFormat(user.lastPostDate)}</span>
                    </div>
                    <p className="people-disc">{user.about}</p>
                </div>
        </div>
        </>

    )
}

export default UserItem