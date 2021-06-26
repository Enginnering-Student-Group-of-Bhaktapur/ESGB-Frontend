import React from 'react';
import TopBar from '../components/Bar/TopBar';
import NavBar from '../components/Bar/NavBar';
import Footer from '../components/Bar/Footer';

const layout = (props) => (
    <div>
        <TopBar />
        <NavBar />
        {props.children}
        <Footer />
    </div>
)

export default layout;