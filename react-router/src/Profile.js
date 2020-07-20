import React from 'react';

const date = {
    velopert : {
        name : 'choi',
        desription : '리액트를 좋아하는 개발자'
    },
    gildong : {
        name : 'cha',
        desription : '떠나간자'
    }
};



const Profile = ({match}) => {
    const {username} = match.params;
    const profile = date[username];
    if(!profile){
        return <div>존재하지 않는 사용자 입니다.</div>
    }
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.desription}</p>
        </div>
    );
};

export default Profile;