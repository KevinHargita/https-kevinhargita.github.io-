import './Footer.css';
import PersonalLink from './PersonalLink';
import { ReactComponent as GitHubLogo } from './images/github.svg';
import { ReactComponent as LinkedInLogo } from './images/linkedin.svg';
import { ReactComponent as EmailLogo } from './images/at-sign.svg';

const Footer = () => {
    return(
        <div className='footer'>
            <ul className='personal-links' >
                <li>
                    <PersonalLink url='https://github.com/KevinHargita'>
                        <GitHubLogo/>
                    </PersonalLink>                   
                </li>
                <li>
                    <PersonalLink url='https://www.linkedin.com/in/kevin-hargita/'>
                        <LinkedInLogo/>
                    </PersonalLink>
                </li>
                <li>
                    <PersonalLink url='mailto:kevinhargita@gmail.com'>
                        <EmailLogo/>
                    </PersonalLink>
                </li>
            </ul>
        </div>
    );
}

export default Footer;