import './Introduction.css';
import UnscrambleText from './UnscrambleText';

const Introduction = () => {
    return(
        <div className='introduction'>
            <p className='introduction-text'>
                <UnscrambleText>
                    {'Hi, my name is'}
                </UnscrambleText>
            </p>
            <h2 className='introduction-name'>
                <UnscrambleText>
                    {'Kevin Hargita.'}
                </UnscrambleText>
            </h2>
            <p>
                <UnscrambleText>
                    {'I\'m a software engineer and passionate computer nerd!'}
                </UnscrambleText>
            </p>
        </div>
    );
}



export default Introduction; 