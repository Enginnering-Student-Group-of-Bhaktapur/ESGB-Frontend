import React from 'react';
import NavBar from '../components/Bar/NavBar';
import Footer from '../components/Bar/Footer';

const layout = (props) => (
    <div>
        <NavBar />
        {props.children}
        <Footer />
    </div>
)

export default layout;