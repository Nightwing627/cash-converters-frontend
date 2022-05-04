import React, { useEffect } from "react";

export default function Vacancy() {
    useEffect(() => {
        window.calcCvacancyHeight();
    })
    return (
        <div className="vacancy-area text-card">
            <h2 className="span-all-columns h2-responsive mb-0">Vacancies</h2>
            {/* <div className="vacancy-content mt-4">
                {Vacancies.map(item => (
                    <div className="vacancy-item mb-4" key={item.id}>
                        <h5 className="span-all-columns h5-responsive main-text">{item.title}</h5>
                        <div className="text-card-content mt-3">{item.summary}</div>
                    </div>
                ))}
            </div> */}
            <iframe 
                title='vacancy-iframe' 
                id="elmo-recruitment-embed" 
                style={{ width: '100%', overflow: 'hidden', border: '0px'}}
                scrolling="yes"
                src="https://cashconverters.elmotalent.co.nz/careers/careers/jobs?layout=iframe"></iframe>
           
        </div>
    )
}