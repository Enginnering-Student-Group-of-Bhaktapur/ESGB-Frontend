import React from 'react';

import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';

function Contact(){
    return (
        <React.Fragment>
            <ContactForm />
            <Map />
        </React.Fragment>
    );
}

export default Contact