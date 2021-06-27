import React from "react";

import Dress_1 from '../../assets/img/d1.jpg';
import Dress_2 from '../../assets/img/d2.jpg';

function Dress() {
  return (
    <section id="basic_info" className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Dress_1} alt="dress_1" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <img src={Dress_2} alt="dress_2" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dress;
