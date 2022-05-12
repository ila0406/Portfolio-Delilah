import ImgProject1 from "./travel-trustees.png"
import ImgProject2 from "./tttp2.png"
import ImgWeather from "./Weather-Dashboard.png"
import ImgScheduler from "./Workday-Scheduler.png"

function Work() {
    return  (
        <main class="container" id="work" >
            <h2>Work</h2>
            <section class="wrapper">
                <div class="box">
                    <div class="projects">
                        <img class="project-img" src={ImgWeather} alt="Mockup for Weather dashboard"/>
                        <a href="https://ila0406.github.io/Weather-Dashboard/" title="Homework 6 - Weather Dashboard"><h3>Weather Dashboard</h3></a>
                        <p>Find out today's weather and the forecast for the next five days</p>
                        <a href="https://github.com/ila0406/Weather-Dashboard" title="Code Repo"><h4>Code Repo</h4></a>
                    </div>
                    <div class="projects">
                        <img class="project-img" src={ImgScheduler} alt="Mockup for Workday Scheduler"/>
                        <a href="https://ila0406.github.io/Work-Day-Scheduler/" title="Homework 5 - Work Day Scheduler"><h3>Work Day Scheduler</h3></a>
                        <p>Keep track of your important events at work</p>
                        <a href="https://github.com/ila0406/Work-Day-Scheduler" title="Code Repo"><h4>Code Repo</h4></a>
                    </div>
                    <div class="projects">
                        <img class="project-img" src={ImgProject2}  alt="Mockup for Travel Trustees2"/>
                        <a href="https://ila0406.github.io/Travel-Trustees/" title="Project 1 - Travel Trustees"><h3>Travel Trustees</h3></a>
                        <p>With safety information and travel information all in one place, you can plan trips quickly and safely.</p>
                        <a href="https://github.com/ila0406/Travel-Trustees" title="Code Repo"><h4>Code Repo</h4></a>
                    </div>
                    <div class="projects">
                        <img class="project-img" src={ImgProject1}  alt="Mockup for Travel Trustees"/>
                        <a href="https://immense-ravine-97579.herokuapp.com/" title="Project 2 - Travel Trustees v2"><h3>Travel Trustees</h3></a>
                        <p>With safety information and travel information all in one place, you can plan trips quickly and safely.</p>
                        <a href="https://github.com/ila0406/Travel-Trustees-2" title="Code Repo"><h4>Code Repo</h4></a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Work