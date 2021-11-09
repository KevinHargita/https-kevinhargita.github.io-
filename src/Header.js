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
                        <a href="#">
                            About    
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           Experience 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Projects
                        </a>  
                    </li>
                    <li>
                        <a href="#">
                            Contact 
                        </a>
                    </li>
                </ol>
            </nav>
        </header>
    );
}

export default Header