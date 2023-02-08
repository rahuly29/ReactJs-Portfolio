import "boxicons";

const Skills = () =>{
  return(
    <main>
      <section className="skills" id="skills">
    <div className="heading">
        <h2>Skills</h2>
        <span>My Skills</span>
    </div>

    <div className="skills-container">
        <div className="bars">

            <div className="bars-box">
                <h3>HTML</h3>
                <span>80%</span>
                <div className="light-bar"></div>
                <div className="percent-bar html-bar"></div>
            </div>

            <div className="bars-box">
                <h3>CSS</h3>
                <span>70%</span>
                <div className="light-bar"></div>
                <div className="percent-bar css-bar"></div>
            </div>

            <div className="bars-box">
                <h3>JavaScript</h3>
                <span>60%</span>
                <div className="light-bar"></div>
                <div className="percent-bar js-bar"></div>
            </div>

            <div className="bars-box">
                <h3>Bootstrap</h3>
                <span>70%</span>
                <div className="light-bar"></div>
                <div className="percent-bar Bootstrap-bar"></div>
            </div>

            <div className="bars-box">
                <h3>ReactJs</h3>
                <span>50%</span>
                <div className="light-bar"></div>
                <div className="percent-bar AngularJs-bar"></div>
            </div>
        </div>
    </div>
</section>
    
    </main>
  )
}

export default Skills;