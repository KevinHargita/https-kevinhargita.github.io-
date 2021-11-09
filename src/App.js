import './App.css';
import Header from './Header'
import Introduction from './Introduction';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    return(
        <div className='App'>
            <Header/>
            <main className='content'>
                <Introduction/>
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
            </main>
            <Footer />
        </div>
    );
}

export default App;