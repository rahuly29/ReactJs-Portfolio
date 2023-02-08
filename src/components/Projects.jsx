import "boxicons";


const Projects = () =>{
  return (
    <main>
      <section className="Projects" id="proj">
    <div className="heading">
        <h2>Projects</h2>
        <span>MY Projects</span>
    </div>
    <div className="project-content">

        <div className="project-box">
            <box-icon name='qr'></box-icon>
            <h3>QR code generator for weblink</h3>
        </div>

        <div className="project-box">
            <box-icon name='user'></box-icon>
            <h3>Personal Portfolio</h3>
        </div>

        <div className="project-box">
            <box-icon name='lock-open-alt'></box-icon>
            <h3>Login/Registration page</h3>
        </div>

        <div className="project-box">
            <box-icon Name='cloud'></box-icon>
            <h3>Weather App Website</h3>
        </div>

        <div className="project-box">
            <box-icon name='fingerprint'></box-icon>
            <h3>Random Password generator</h3>
        </div>

        <div className="project-box">
            <box-icon name='stopwatch'></box-icon>
            <h3>StopWatch</h3>
        </div>
    </div>
</section>
    </main>
  )
}

export default Projects;