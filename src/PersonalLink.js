import './PersonalLink.css';

const PersonalLink = ({url, children}) => {
    return(
        <a className='personal-link' href={url} target='_blank' rel="noreferrer">
            {children}
        </a>
    );
}

export default PersonalLink;