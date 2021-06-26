import React from 'react';

import AboutLimelight from '../components/Limelight/AboutLimelight';
import LimelightList from '../components/Limelight/LimelightList';

function Limelight(){
    return (
        <section>
            <div className = "container">
                <div className = "row py-4">
                    <div className="col-md-8 shadow p-3 event_shadow_bg rounded">
                        <AboutLimelight />
                    </div>
                    <div className="col-md-4 shadow p-3 event_shadow_bg rounded">
                        <LimelightList />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Limelight