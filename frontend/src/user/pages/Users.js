import React from 'react';

import UsersList from "../components/UsersList"

const Users = () => {
    const USERS = [
        {
            id: 1,
            name: "Tomek",
            image: "https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg",
            places: 3
        }
    ]

    return <UsersList item={USERS} />
}

export default Users