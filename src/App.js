import React, { useState, useEffect } from 'react'
// import data from './Data'
import Spinner from '../src/Spinner.gif'
const url = 'https://course-api.com/react-tabs-project'
const App = () => {
  const [loading, setloading] = useState(true);
  const [jobs, setjobs] = useState([])
  const [value, setvalue] = useState(0)
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setjobs(data);
    setloading(false)
  }
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <>
        <div className="loadingContainer">
          <img src={Spinner} alt="" />
          <p className="loadingText">Loading...</p>
        </div>
      </>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <>
      <div className="container">
        <div className="top">
          <h4 className="topText">Experience</h4>
        </div>
        <div className="toogle">
          {
            jobs.map((job, index) => {
              return <p className={index === value ? 'toogleTitle active' : 'toogleTitle'} onClick={() => setvalue(index)} key={job.id}>{job.company}</p>
            })
          }
        </div>
        <div className="main">
          <h4 className="title">{title}</h4>
          <p className="jobCompany">{company}</p>
          <p className="jobDate">{dates}</p>
          {
            duties.map((duty, index) => {
              return (
                <div key={index} className="dutyContainer">
                  <p className='duty'>{duty}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App 
