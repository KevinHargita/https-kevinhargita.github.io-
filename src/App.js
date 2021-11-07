import './App.css';
import Header from './Header'
import Section from './Section';
import Introduction from './Introduction';
import About from './About';
import Footer from './Footer';

const App = () => {
    return(
        <div className='App'>
            <Header/>
            <main className='content'>
                <Section>
                    <Introduction/>
                </Section>
                <Section>
                    <About/>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

export default App;