import React, {useEffect, useState} from 'react';

const Home = () => {
    const [userLocationData, setUserLocationData] = useState({})

    const userIpapi = 'https://ipapi.co/json';

    useEffect(() => {
        fetch(userIpapi)
            .then(response => response.json())
            .then(data => setUserLocationData({country: data.country, city: data.city}))
        .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    console.log(userLocationData)

    return (
        <div>
            Home
        </div>
    );
};

export default Home;