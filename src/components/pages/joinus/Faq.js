import React from "react";
import Faq from 'react-faq-component'
import { Faqs } from './joinus.data'

export default function FaqContent({width}) {
    return (
        <React.Fragment>
            <Faq 
                data={Faqs}
                styles={{
                    bgColor: 'white',
                    rowTitleColor: '#505056',
                    rowTitleTextSize: width < 577 ? '20px' : '25px',
                    rowContentColor: '#505056',
                    rowContentTextSize: width < 577 ? '17px' : '20px',
                    rowContentPaddingTop: '20px',
                    rowContentPaddingBottom: '40px',
                    rowContentPaddingRight: width < 577 ? '30px' : '60px',
                    arrowColor: '#505056'
                }}
            />
        </React.Fragment>
    )
}