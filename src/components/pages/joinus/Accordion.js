import React, { useState } from 'react';

export default function Accordion({data}) {
    const [accordions, setAccordions] = useState([]);

    const initData = () => {
        if (accordions.length === 0) {
            console.log('init accordions');
            data.forEach((i) => {
                accordions.push({
                    title: i.title,
                    content: i.content,
                    open: false,
                    preOpen: false,
                });
            });
        }
    }

    initData();

    function toogle(i) {
        const newAccordion = accordions.slice();
        let isOpen = false;
        newAccordion.map((item) => {
            item.preOpen = false;
            if (newAccordion.indexOf(i) === newAccordion.indexOf(item)) {
                item.open = !item.open;
                isOpen = item.open;
            } else if (!!isOpen) {
                item.preOpen = true;
                isOpen = false;
            } else {
                item.open = false;
            }
        })

        setAccordions(newAccordion)
    }

    return (
        <div className='accordion-area'>
            {accordions.map((i) => (
                <div className={`accordion-item ${i.open ? 'open' : ''} ${i.preOpen ? 'pre-open' : ''}`} key={accordions.indexOf(i)}>
                    <div
                        className="accordion-title"
                        onClick={toogle.bind(null, i)}>
                        <div className='title-text'>{i.title}</div>
                        <div className='arrow-wrapper'>
                            <span className={i.open && 'expend-content'}>
                                <i className='fa fa-angle-down'></i>
                            </span>
                        </div>
                    </div>
                    <div 
                        className={i.open ? 'content content-open' : 'content'}>
                        <div className={i.open ?
                            'content-text content-text-open'
                            : 'content-text'}>
                            {i.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}