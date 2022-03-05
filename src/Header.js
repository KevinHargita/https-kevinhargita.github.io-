import './Header.css'
function Header() {
    return(
        <header className='header'>
            <nav className='navbar'>
                <div>
                    <a className='navbar-home-link' href="#">
                    &#123;K&#125;
                    </a>
                </div>
                <ol className='navbar-links'>
                    <li>
                        <a href="/#about">
                            About    
                        </a>
                    </li>
                    <li>
                        <a href="/#experience">
                           Experience 
                        </a>
                    </li>
                    <li>
                        <a href="/#projects">
                            Projects
                        </a>  
                    </li>
                    <li>
                        <a href="/#contact">
                            Contact 
                        </a>
                    </li>
                </ol>
            </nav>
        </header>
    );
}

export default Header