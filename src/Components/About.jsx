import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/app.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const scripts = document.createElement("script");
    scripts.src = "/particles.min.js";
    scripts.async = true;
    document.body.appendChild(scripts);
    return () => {
      document.body.removeChild(scripts);
    };
  }, []);
  return (
    <>
      <section class="about">
        <div id="particles-js"></div>

        <h1 class="heading">
          {" "}
          about <span>me</span>{" "}
        </h1>

        <div class="image">
          <img src="/Images/me.jpg" alt="" />
        </div>

        <div class="row">
          <div class="info-container">
            <h1>personal info</h1>

            <div class="box-container">
              <div class="box">
                <h3>
                  {" "}
                  <span>name : </span> Sailal Shivraj{" "}
                </h3>
                <h3>
                  {" "}
                  <span>age : </span> 25{" "}
                </h3>
                <h3>
                  {" "}
                  <span>email : </span> sailalshivraj@gmail.com{" "}
                </h3>
                <h3>
                  {" "}
                  <span>address : </span> daman, india - 396210{" "}
                </h3>
              </div>

              <div class="box">
                <h3>
                  {" "}
                  <span>skill : </span> full-stack{" "}
                </h3>
                <h3>
                  {" "}
                  <span>experience : </span> 1 years{" "}
                </h3>
                <h3>
                  {" "}
                  <span>language : </span> english, hindi, malayalam{" "}
                </h3>
              </div>
            </div>

            <a
              href="https://res.cloudinary.com/dpzyuycb9/image/upload/v1665247029/220350120080_SAILAL_SHIVRAJ_hd3ix6.pdf"
              _blank
              class="btn"
            >
              {" "}
              download CV <i class="fas fa-download"></i>{" "}
            </a>
          </div>

          <div class="count-container">
            <div class="box">
              <h3>1</h3>
              <p>years of experience</p>
            </div>

            <div class="box">
              <h3>10+</h3>
              <p>project completed</p>
            </div>
          </div>
        </div>
      </section>

      <section class="skills">
        <h1 class="heading">
          {" "}
          <span>my</span> skills{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src="images/icon-1.png" />
            <h3>html</h3>
          </div>
          <div class="box">
            <img src="images/icon-2.png" />
            <h3>css</h3>
          </div>
          <div class="box">
            <img src="images/icon-3.png" />
            <h3>javascript</h3>
          </div>
          <div class="box">
            <img src="images/icon-4.png" />
            <h3>sass</h3>
          </div>
          <div class="box">
            <img src="images/icon-5.png" />
            <h3>jquery</h3>
          </div>
          <div class="box">
            <img src="images/icon-6.png" />
            <h3>react.js</h3>
          </div>
          <div class="box">
            <img src="images/icon-7.png" />
            <h3>Node js</h3>
          </div>
          <div class="box">
            <img src="images/icon-8.png" />
            <h3>BootStrap</h3>
          </div>
          <div class="box">
            <img src="images/icon-9.png" />
            <h3>Material UI</h3>
          </div>
          <div class="box">
            <img src="images/icon-10.png" />
            <h3>Mongo Db</h3>
          </div>
          <div class="box">
            <img src="images/icon-11.png" />
            <h3>Mysql</h3>
          </div>
          <div class="box">
            <img src="images/icon-12.png" />
            <h3>Java</h3>
          </div>
          <div class="box">
            <img src="images/icon-13.png" />
            <h3>Spring</h3>
          </div>
          <div class="box">
            <img src="images/icon-14.png" />
            <h3>Styled Components</h3>
          </div>
        </div>
      </section>

      <section class="education">
        <h1 class="heading">
          {" "}
          <span>my</span> education{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2013 - 2014</span>
            <h3>Class X</h3>
            <p>Coast Guard Public School Daman</p>
            <p>Percentage: 81.6%</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2014 - 2015</span>
            <h3>Class XII</h3>
            <p>Coast Guard Public School Daman Applied Science (PCM)</p>
            <p>Percentage: 78.6%</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2015 - 2019</span>
            <h3>Electrical Engineering</h3>
            <p>K K Wagh College of Engineering Nashik</p>
            <p>Percentage: 74.5%</p>
          </div>
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2020 - 2021</span>
            <h3>Apprenticeship Trainee</h3>
            <p>Hubergroup India Private Limited</p>
          </div>
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2022 - 2022</span>
            <h3>PG-DAC</h3>
            <p>CDAC KP Banglore</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
