import React from "react";
import img from "../src/images/1.svg";

const Home = () => {
  return (
    <>
      <div class="container">
        <div class="container-fluid my-5">
          <h1 class="text-center navigation">Home</h1>
          <div class="row">
            <div class="container my-5">
              <div class="row">
                <div class="col-md-6 mx-5">
                  <img class="col-md-12" src={img} />
                </div>
                <div class="col-md-4 my-auto">
                  <p class="paragraph my-auto">
                    Hello, Iam Atharva. I make this website for my portfolio.
                    You can call me create a website using ‘HTML’, ‘CSS’ and
                    ‘Javascript’. I know ‘React js’ and some ‘Vue js’. And also
                    I can create a mobile app using ‘React native’, but I can’t
                    create it becase my pc use 4GB ram and adroid studio use
                    minimal 6GB ram. I have some knowlege of backend (PHP), like
                    create a database in database insert table, and in query
                    insert user data, and mail using PHP. Iam A frontend
                    devoleper and web designer. You Can See my
                    <a
                      target="__next_page"
                      href="https://github.com/tech-atharva"
                    >
                      Project
                    </a>
                    , you also can follow on me
                    <a
                      target="__next_page"
                      href="https://github.com/tech-atharva"
                    >
                      github
                    </a>
                    .
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

export default Home;
