import React from "react";
import { Vacancies } from './joinus.data'

export default function Vacancy() {
    return (
        <div className="vacancy-area">
            <p className="service-out-title">Vacancies</p>
            <div className="vacancy-content">
                {Vacancies.map(item => (
                    <div className="vacancy-item mb-4" key={item.id}>
                        <p className="mb-4">{item.title}</p>
                        <div>{item.summary}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}