import './footer.css';

import Contacts from '../contacts';
import Logo from '../logo';

const Footer = () => {

    return (
        <footer>
            <h2>Создано с любовью и страстью к деталям</h2>
            <div>
                <Logo />
                <Contacts />
                <p>Темная студия. Все права защищены. ©2023-2024</p>
            </div>
        </footer>
    )
}

export default Footer;