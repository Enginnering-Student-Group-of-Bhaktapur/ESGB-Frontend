import React from "react";

import Dress_1 from '../../assets/img/d1.jpg';
import Dress_2 from '../../assets/img/d2.jpg';

function Dress() {
  return (
    <section id="basic_info" class="py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src={Dress_1} alt="dress_1" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <img src={Dress_2} alt="dress_2" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dress;
