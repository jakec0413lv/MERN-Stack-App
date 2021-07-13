import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: "https://th.bing.com/th/id/OIP.yFRbsBge6JQuY-qnQFXCoAHaLG?pid=ImgDet&rs=1",
        address: "20 W 34th St, New York, NY 10001",
        locations: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creatorId: "1"
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: "https://th.bing.com/th/id/OIP.yFRbsBge6JQuY-qnQFXCoAHaLG?pid=ImgDet&rs=1",
        address: "20 W 34th St, New York, NY 10001",
        locations: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creatorId: "2"
    }
]
const UserPlaces = () => {
    const userID = useParams().userId;
    console.log(userID);
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userID);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;