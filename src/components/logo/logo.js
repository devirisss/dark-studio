import './logo.css';

import logoImage from '../../images/Logo.png';

const Logo = () => {
    return (
        <a href="https://xn----7sbnbsuh8adgl4lg.xn--p1ai/" target="_blank" rel="noreferrer">
            <div className="logo">
                    <img src={logoImage} alt="Logo"></img>
                    <p>Темная студия</p>
            </div>
        </a>
    )
}

export default Logo;