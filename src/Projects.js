import './Projects.css';
import { ReactComponent as GitHubLogo } from './images/github.svg';
import { ReactComponent as LinkLogo } from './images/link.svg';

function Projects() {
    const projectData = [
        {
            name: 'Personal Site',
            description: 'My portfolio, come learn more abot me and take look at what I\'m working on!',
            technologies: ['JS', 'React', 'CSS', 'HTML'],
            link: 'https://kevinhargita.github.io/',
            github: 'https://github.com/KevinHargita/kevin-hargita-personal-site'
        },
        {
            name: 'Arbitrage Web Scraper',
            description: 'Web scraper that gathers data on money line bets from multiple sport book sites, compares the odds, and detects arbitrage opportunities for gauranteed profit.',
            technologies: ['Python', 'Selenium', 'Pandas'],
            github: 'https://github.com/KevinHargita/ArbScraper'
        },
        {
            name: 'Weather Adjusting Backgrounds',
            description: 'Google Chrome plugin that updates Google Hangouts background according to local weather and time of day.',
            technologies: ['JS', 'Chrome-Extension'],
            github: 'https://github.com/KevinHargita/Weather-Adjusting-Backgrounds'
        },
        {
            name: 'Blockchain Sandbox',
            description: 'Interactive demonstration of the blockchain data structure.',
            technologies: ['JS', 'React', 'Redux', 'SHA-256', 'MUI', 'HTML', 'CSS'],
            link: 'https://blockchain-sandbox.herokuapp.com/',
            github: 'https://github.com/KevinHargita/blockchain-sandbox'
        }
    ]

    const renderProjectLink = (index) => {
        if (projectData[index].link){
            return (
                <a href={projectData[index].link} target='_blank' rel='noopener noreferrer'>
                    <LinkLogo className='project-link'/>
                </a>
            )
        }
    }

    return(
        <section className='content-section'>
            <div className='projects' id='projects'>
                <h2>
                    Projects
                </h2>
                <div className='projects-inner'>
                    <ul className='projects-list'>
                        {projectData.map((project, i) => 
                            <li className='project-list-item'>
                                <div className='project-item-inner'>
                                    <header>
                                        <div className='project-top'>
                                            <a href={project.github} target='_blank' rel='noopener noreferrer'>
                                                <GitHubLogo className='project-link'/>
                                            </a>
                                            {renderProjectLink(i)}
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