import { useEffect, useState } from 'react';

function UnscrambleText({children, speed=32}) {
    const text = children;
    const [display, setDisplay] = useState('');
    const [solved, setSolved] = useState(Array.from(text).map(() => false));

    useEffect(() => {
        const interval = setInterval(() => {
            let newDisplay = '';
            let newSolved = solved;
            const characters = '0123456789ABCDEFG__';
            for (let i = 0; i < text.length; i++) {
                if (newSolved[i] === true){
                    newDisplay += text[i];
                }
                else{
                    const c = characters.charAt(Math.floor(Math.random() * characters.length));
                    if (c === '_'){
                        newSolved[i] = true;
                        newDisplay += text[i];
                    }
                    else{
                        newDisplay += c;
                    }
                }
            }
            if (solved.every(s => s)){
                clearInterval(interval);
            }
            setSolved(newSolved)
            setDisplay(newDisplay)
              
        }, speed);
        return () => clearInterval(interval);
    });

    return(
        <>
            {display}
        </>
    )
}

export default UnscrambleText;