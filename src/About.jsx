import React from "react";
import img from "../src/images/2.svg";

const About = () => {
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
                  <p class="paragraph font-size-l">
                    Hello world, I am <a>Atharva</a>. I learn coding from 10th
                    year old. But chill, I am a front end devoleper with
                    Javascript, react and vue . And I Know ‘React native’ ,
                    ‘React js’ , ‘Vue js’ then ‘HTMl’ , ‘CSS’, ‘Javascript’, and
                    also I know graphic design. now I don’t have any follower in
                    github, But I know one day I have millions of follower on
                    github. To sopport{" "}
                    <a href="https://github.com/tech-atharva">
                      follow on me github.
                    </a>
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

export default About;
