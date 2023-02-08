import "boxicons";

const About = () => {
  return (
    <main>
      <section className="about" id="about">
        <div className="heading">
          <h2>About Me</h2>
          <span>Introduction</span>
        </div>

        <div className="about-container">
          <div className="about-img">
            <img src="./src/images/rahulyadav.jpg" alt="aboutImage" />
          </div>
          <div className="about-text">
            <p>
              I'm Front-End Developer with 6 Months of Training @ Quastech. I'm
              From INDIA. I code and create web elements for amazing people
              around the world. I like work with new people. New people new
              Experience
            </p>
            <div className="information">
              <div className="info-box">
                <box-icon name="user"></box-icon>
                <span>Rahul Yadav</span>
              </div>

              <div className="info-box">
                <box-icon name="phone"></box-icon>
                <span>+91 8268143979</span>
              </div>

              <div className="info-box">
                <box-icon name="envelope"></box-icon>
                <span>yadavrahul2910@outlook.com</span>
              </div>
            </div>
            <a href="#contact" className="btn">
              Contact me!
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
