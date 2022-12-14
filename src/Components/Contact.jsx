import React, { useEffect } from "react";

function Contact() {
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
      <section class="contact">
        <div id="particles-js"></div>

        <h1 class="heading">
          {" "}
          contact <span>me</span>{" "}
        </h1>

        <div class="image">
          <img src="/Images/me.jpg" alt="" />
        </div>

        <div class="row">
          <div class="info-container">
            <h1>get in touch</h1>

            <p>
              I like to keept it simple. My goals are to focus on typography,
              content and conveying the message that you want to send
            </p>

            <div class="box-container">
              <div class="box">
                <i class="fas fa-map"></i>
                <div class="info">
                  <h3>address :</h3>
                  <p>Daman, india - 396210</p>
                </div>
              </div>

              <div class="box">
                <i class="fas fa-envelope"></i>
                <div class="info">
                  <h3>email :</h3>
                  <p>sailalshivraj@gmail.com</p>
                </div>
              </div>

              <div class="box">
                <i class="fas fa-phone"></i>
                <div class="info">
                  <h3>number :</h3>
                  <p>8805311737</p>
                </div>
              </div>
            </div>

            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>

          <form action="">
            <div class="inputBox">
              <input type="text" placeholder="your name" />
              <input type="number" placeholder="your number" />
            </div>

            <div class="inputBox">
              <input type="email" placeholder="your email" />
              <input type="text" placeholder="your subject" />
            </div>

            <textarea
              name=""
              placeholder="your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <input type="submit" value="send message" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
