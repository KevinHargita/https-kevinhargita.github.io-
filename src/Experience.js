import { useState } from 'react';
import './Experience.css'

function Experience() {
    const [experience, setExperience] = useState([
        {
            name: 'Tempus',
            jobTitle: 'Senior Application Developer',
            date: 'July 2020 - Present',
            responsibilities: [
                'Practiced Agile methodology as a full-stack application developer to provide iterative updates to our Lab Information Management System built on ASP.NET Core.',
                'Worked closely with lab staff to design and develop new functionality within multiple applications to accommodate dynamic lab workflows.',
                'Built a RESTful API with Express.js to accompany an iOS app that allowed lab staff to record and manage finely detailed lab data that was previously uncaptured, eliminating the need for physical note-taking.',
                'Proposed using Jira as our team\'s primary project management tool, allowing us to better delegate development to different team members.'
            ],
            active: true
        },
        {
            name: 'Internship',
            jobTitle: 'Intern - Tempus',
            date: 'May 2020 - July 2020',
            responsibilities: [
                'Built data processing applications in python for processing and delivering sensitive genotyping result data to clients in a timely and efficient manner.',
                'Designed and implemented a fail-safe feature for manual data uploads in case of network failures that allowed for uploads to continue from the last file sent, saving up to 12 hours in data transfers in some cases.',
                'Developed bug fixes for our lab management application.'
            ],
            active: false
        },
        {
            name: 'Education',
            jobTitle: 'BS in Computer Science',
            date: 'August 2016 - May 2020',
            responsibilities: [
                'Graduated with a bachelor\'s of science from the Georgia State University Honors College.',
                'Majored in Computer Science with a concentration in Computer Software Systems.',
                'Attended and competed in multiple GSU Hackathons.',
                'Relevant Corses: Operating Systems, Computer Architechture, Data Structures, Intro to Machine Learning, Data Visualizations, Computer Networking, Distributed Systems, Image Processing, Mobile App Development',
                'Technologies: Java, C/C++, MySQL, MongoDB, Python, Pandas, Plotly, Tableau, MatLab, WireShark, Unbuntu, CUDA, Eclipse, Visual Studio, Android Studio'
                
            ],
            active: false
        }
    ]);

    function changeExperienceItem(selectedExperience) {
        setExperience(() => {
            return experience.map((e) => {
                if (e == selectedExperience){
                    e.active = true;
                    return e;
                }
                else {
                    e.active = false;
                    return e;
                }
            })
        })
    }

    return(
        <section className='content-section'>
            <div className='experience' id='experience'>
                <h2>
                    Experience
                </h2>
                <div className='experience-inner'>
                    <div className='experience-list'>
                        <ul>
                            {experience.map((e) =>
                                <li>
                                    <button className={e.active ? 'selected-item' : 'unselected-item'} onClick={() => {changeExperienceItem(e)}}>
                                        {e.name} 
                                    </button>   
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='experience-description'>
                        {experience.map((e) => 
                            <div className={e.active ? 'experience-item active-item' : 'experience-item inactive-item'}>
                                <h3>
                                    {e.jobTitle}
                                </h3>
                                <p className='experience-date'>
                                    {e.date}
                                </p>
                                <ul>
                                    {e.responsibilities.map((responsibility) => 
                                        <li className='experience-responsibility'>
                                            {responsibility}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>   
            </div>
        </section>
    );
}

export default Experience;