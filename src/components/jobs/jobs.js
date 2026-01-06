import { useState } from 'react';
import { Element } from 'react-scroll';

import './jobs.css';

import jobsList from '../../data/jobs.json';
import JobsItem from '../jobs-item';

const Jobs = () => {

    const [inputData, setInputData] = useState({ name: '', phone: '', email: '' });
    let [counter, setCounter] = useState(0);

    const pagesLimit = jobsList.length - 1;
    const filteredData = jobsList.filter((item) => item.id === counter);

    const switchNext = () => {
        if (counter < pagesLimit) {
            setCounter(++counter);
        } else {
            setCounter(0);
        }
    }

    const switchPrevious = () => {
        if (counter > 0) {
            setCounter(--counter);
        } else {
            setCounter(jobsList.length - 1);
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setInputData({ name: '', phone: '', email: '' });
    }

    return (
        <Element name="jobs" className="jobs">
            <h2>Вакансии в Темной Студии</h2>
            <p className="subtitle">Настал тот самый момент, когда нам нужно еще больше свежих мозгов для самых смелых проектов</p>
            <div className="employmentField">
                <div className="vacancy">
                    <div className="switch">
                        <div onClick={switchPrevious}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="40" viewBox="0 0 11 28" fill="none">
                                <path d="M9.67257 1L1.37023 13.445C1.14606 13.7811 1.14606 14.2189 1.37023 14.555L9.67257 27" stroke="#226DFF" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                        <div onClick={switchNext} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="40" viewBox="0 0 11 28" fill="none">
                                <path d="M1.32743 1L9.62977 13.445C9.85394 13.7811 9.85394 14.2189 9.62977 14.555L1.32743 27" stroke="#226DFF" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    {filteredData.map((item) => <JobsItem data={item} />)}
                </div>
                <div className="form">
                    <form onSubmit={formSubmit}>
                        <input required={true} type="text" placeholder="ФИО" value={inputData.name} onChange={(e) => setInputData({ name: e.target.value })}></input>
                        <input required={true} type="text" placeholder="Телефон" value={inputData.phone} onChange={(e) => setInputData({ phone: e.target.value })}></input>
                        <input required={true} type="text" placeholder="E-mail" value={inputData.email} onChange={(e) => setInputData({ email: e.target.value })}></input>
                        <input type="submit" value="Откликнуться"></input>
                    </form>
                </div>
            </div>
        </Element>
    )
}

export default Jobs;