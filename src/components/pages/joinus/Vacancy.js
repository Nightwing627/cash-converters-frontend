import React, { useEffect } from "react"

export default function Vacancy() {  
  useEffect(() => {
    window.calcVacancyHeight()
  }, [])

  const adjustVisible = () => {
    let iframeObj = window.document.getElementById('elmo-recruitment-embed')

    if (iframeObj !== null) {
      console.log(iframeObj.style.display)
      iframeObj.style.display = "block"
    }
  }
  //this.style.display='block'

  return (
    <div className="vacancy-area text-card">
      <h2 className="span-all-columns h2-responsive mb-0">Vacancies</h2>

      <iframe
        title="vacancy-iframe"
        id="elmo-recruitment-embed"
        style={{
          display: "none",
          width: '100%',
          overflow: 'hidden',
          border:  '0px'
        }}
        scrolling="no" 
        seamless="seamless" 
        src="https://cashconverters.elmotalent.co.nz/careers/careers/jobs?layout=iframe"
        onLoad={adjustVisible()}></iframe>
    </div>
  )
}
