import React from "react";
import img from "../src/images/3.svg";

const Porfolio = () => {
  return (
    <>
      <div class="container">
        <div class="container-fluid my-5">
          <h1 class="text-center navigation">About me</h1>
          <div class="row">
            <div class="container my-5">
              <div class="row">
                <div class="col-md-6 mx-5">
                  <img class="col-md-12" src={img} />
                </div>
                <div class="col-md-4 my-auto">
                  <p class="paragraph font-size-xl">
                    I am <a>UI UX devoleper</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Porfolio;
