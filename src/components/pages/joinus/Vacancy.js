import React, { useEffect } from "react";

export default function Vacancy() {
    useEffect(() => {
        window.calcVacancyHeight();
    })
    return (
        <div className="vacancy-area text-card">
            <h2 className="span-all-columns h2-responsive mb-0">Vacancies</h2>
           
            <iframe 
                title='vacancy-iframe' 
                id="elmo-recruitment-embed"
                style={{ width: '100%', overflow: 'hidden', border: '0px'}}
                scrolling="yes"
                loading="lazy"
                src="https://cashconverters.elmotalent.co.nz/careers/careers/jobs?layout=iframe"></iframe>
           
        </div>
    )
}