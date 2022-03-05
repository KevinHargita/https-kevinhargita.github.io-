import './About.css';
import headshot from './images/headshot.jpg';

function About(){
    return(
        <section className='content-section'>
            <div className='about' id='about'>
                <h2>
                    About Me
                </h2>
                <div className='about-inner'>
                    <div className='about-text'>
                        <p>
                            I am just beginning my career as a software engineer! 
                            While I am still trying to find the exact software engineering flavor that I enjoy, 
                            I'm working hard to master the fundamentals of all thing tech. I have been
                            exploring areas of software development from web based apps to GPU programming. 
                        </p>
                        <p>
                            Here are some technologies that I have worked with recently: 
                        </p>
                        <ul className='skill-list'>
                            <li>
                                C#
                            </li>
                            <li>
                                ASP.NET Core
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Express.js
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                Pandas
                            </li>
                            <li>
                                Selenium
                            </li>
                            <li>
                                SQL
                            </li>
                        </ul>
                    </div>
                    <div className='about-image-box'>
                        <img src={headshot} className='headshot' alt='Headshot'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;