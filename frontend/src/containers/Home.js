import React from 'react';

import Banner from '../components/Home/Banner';
import FounderMessage from '../components/Home/FounderMessage';
import Dress from '../components/Home/Dress';

function Home(){
    return (
        <React.Fragment>
            <Banner />
            <FounderMessage />
            <Dress />
        </React.Fragment>
    );
}

export default Home