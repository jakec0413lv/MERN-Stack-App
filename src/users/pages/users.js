import React, {useState} from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const [users, setUsers] = useState([
        {
            id: 1, 
            image: "https://th.bing.com/th/id/OIP.nKBf1kAyztV94SrH3SKwyQAAAA?pid=ImgDet&rs=1",
            name:"Duke",
            places : 5
        }
    ]);
    
    return (
        <div>
            <UsersList items={users}/> 
        </div>
    )
};

export default Users;