import './Section.css';

const Section = ({children}) => {
    return(
        <section className='content-section'>
            {children}
        </section>
    );
}

export default Section;