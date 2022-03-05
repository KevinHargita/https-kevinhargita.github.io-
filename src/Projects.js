import './Projects.css';
import { ReactComponent as GitHubLogo } from './images/github.svg';

function Projects() {
    const projectData = [
        {
            name: 'Personal Site',
            description: 'My portfolio, come learn more abot me and take look at what I\'m working on!',
            technologies: ['JS', 'React', 'Node', 'CSS', 'HTML'],
            link: 'https://github.com/KevinHargita/kevin-hargita-personal-site',
            github: 'https://github.com/KevinHargita/kevin-hargita-personal-site'
        },
        {
            name: 'Arbitrage Web Scraper',
            description: 'Web scraper that gathers data on money line bets from multiple sport book sites, compares the odds, and detects arbitrage opportunities for gauranteed profit.',
            technologies: ['Python', 'Selenium', 'Pandas'],
            link: 'https://github.com/KevinHargita/ArbScraper',
            github: 'https://github.com/KevinHargita/ArbScraper'
        },
        {
            name: 'Weather Adjusting Backgrounds',
            description: 'Google Chrome plugin that updates Google Hangouts background according to local weather and time of day.',
            technologies: ['JS', 'Chrome-Extension'],
            link: 'https://github.com/KevinHargita/Weather-Adjusting-Backgrounds',
            github: 'https://github.com/KevinHargita/Weather-Adjusting-Backgrounds'
        }
    ]
    return(
        <section className='content-section'>
            <div className='projects' id='projects'>
                <h2>
                    Projects
                </h2>
                <div className='projects-inner'>
                    <ul className='projects-list'>
                        {projectData.map((project) => 
                            <li className='project-list-item'>
                                <div className='project-item-inner'>
                                    <header>
                                        <div className='project-top'>
                                            <a href={project.github} target='_blank' rel='noopener noreferrer'>
                                                <GitHubLogo className='github-link'/>
                                            </a>
                                        </div>
                                        <h3 className='project-name'>
                                            {project.name}
                                        </h3>
                                        <p className='project-description'>
                                            {project.description}
                                        </p>
                                    </header>
                                    <footer>
                                        <ul className='technologies-list'>
                                            {project.technologies.map((technology) => 
                                                <li>
                                                    {technology}
                                                </li>
                                            )}
                                        </ul>
                                    </footer>
                                </div>
                            </li>
                        )}
                    </ul>  
                </div>
            </div>
        </section>
    );
}

export default Projects;