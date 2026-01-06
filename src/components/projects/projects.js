import { useState } from 'react';
import { Element } from 'react-scroll';

import './projects.css';

const Projects = () => {

    const [visible, setVisible] = useState(true);

    let classNames = visible ? null : "inactive";

        return (
            <Element name="projects" className="projects">
                <h2>Наши проекты</h2>
                <p className="subtitle">Более 15-и готовых проектов и довольных клиентов!</p>
                <div className="gallery">
                    <div className={`one covering ${classNames}`}>
                        <a href="https://trade-alfa.ru/" title="Перейти на сайт" target="_blank" rel="noreferrer"></a>
                    </div>
                    <div className="two secondary"
                    onMouseEnter={() => setVisible(false)}
                    onMouseLeave={() => setVisible(true)}>
                        <div className="overlay"><a href="https://emtam.ru/" title="Перейти на сайт" target="_blank" rel="noreferrer"></a></div>
                    </div>
                    <div className="three secondary"
                    onMouseEnter={() => setVisible(false)}
                    onMouseLeave={() => setVisible(true)}>
                        <a href="https://genstab.pro/" title="Перейти на сайт" target="_blank" rel="noreferrer"></a>
                    </div>
                    <div className="four secondary"
                    onMouseEnter={() => setVisible(false)}
                    onMouseLeave={() => setVisible(true)}>
                        <a href="https://implemsystem.ru/" title="Перейти на сайт" target="_blank" rel="noreferrer"></a>
                    </div>
                    <div className="five secondary"
                    onMouseEnter={() => setVisible(false)}
                    onMouseLeave={() => setVisible(true)}>
                        <a href="https://pro100-stairs.ru/" title="Перейти на сайт" target="_blank" rel="noreferrer"></a>
                    </div>
                    <div className="six secondary"
                    onMouseEnter={() => setVisible(false)}
                    onMouseLeave={() => setVisible(true)}>
                        <a href="https://ffural.ru/" title="Перейти на сайт" target="_blank" rel="noreferrer"></a>
                    </div>
                    <div className="seven secondary"
                    onMouseEnter={() => setVisible(false)}
                    onMouseLeave={() => setVisible(true)}>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div onClick={(e) => {window.location.href='mailto:info@blackcssstudio.com'}}className="orderButton"><p>Заказать проект</p></div>
            </Element>
        )
    }

    export default Projects;

   