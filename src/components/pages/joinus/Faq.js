import React from "react";
import Faq from 'react-faq-component'
import { Faqs } from './joinus.data'

export default function FaqContent() {
    return (
        <React.Fragment>
            <Faq 
                data={Faqs}
                styles={{
                    bgColor: 'white',
                    rowTitleColor: '#505056',
                    rowTitleTextSize: '30px',
                    rowContentColor: '#505056',
                    rowContentTextSize: '20px',
                    rowContentPaddingTop: '20px',
                    rowContentPaddingBottom: '40px',
                    rowContentPaddingRight: '60px',
                    arrowColor: '#505056'
                }}
            />
        </React.Fragment>
    )
}