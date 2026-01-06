import { Element } from 'react-scroll';

import './services.css';

const Services = () => {

    return (
        <Element name="services" className="services">
        <h2>Наши услуги</h2>
        <div className="catalog">
            <div>
                <p className="num">01</p>
                <p className="name">WEB-pазработка</p>
                <p className="description">Разработка сайтов, интернет магазинов и прочих сервисов с соблюдением передовых технологий.</p>
            </div>
            <div>
                <p className="num">02</p>
                <p className="name">Продвижение</p>
                <p className="description">Поисковая оптимизация, социальные сети, контекстная и таргетированная реклама, реклама в off-line.</p>
            </div>
            <div>
                <p className="num">03</p>
                <p className="name">Дизайн</p>
                <p className="description">Привлекательный дизайн для сайтов, баннеров, логотипов, презентаций и буклетов, создание уникального стиля.</p>
            </div>
            <div>
                <p className="num">04</p>
                <p className="name">Поддержка проекта</p>
                <p className="description">Техническая поддержка сайта, внесение корректировок и обновление контента. Контентная поддержка.</p>
            </div>
            <div>
                <p className="num">05</p>
                <p className="name">Мобильные приложения </p>
                <p className="description">Разработка Android и IOS приложений. Создание адаптивного дизайна и мобильных версий сайтов.</p>
            </div>
            <div>
                <p className="num">06</p>
                <p className="name">Интеграция</p>
                <p className="description">Соединение различных систем для совместной работы для достижения желаемых результатов.</p>
            </div>
        </div>
    </Element>
    )
}

export default Services;