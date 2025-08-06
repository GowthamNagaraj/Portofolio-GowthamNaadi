import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";

const Skills = () => {
  return (
    <div className='md:px-28 max-w-full min-h-screen md:p-14 p-7 bg-sky-800 dark:bg-sky-950' id='skills'>
                <h2 className='text-3xl font-semibold text-white text-shadow-lg text-shadow-blue-400'>Skills</h2>
                <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center">
                    
                <div data-aos="fade-left">
                    <ReactSpeedometer
                    value={90}
                    minValue={0}
                    maxValue={100}
                    segments={5}
                    needleColor="steelblue"
                    startColor="green"
                    endColor="red"
                    textColor="#fff"
                    currentValueText="HTML,CSS,Bootstrap,Tailwind"
                />
                </div>
                <div data-aos="fade-up">
                <ReactSpeedometer
                    value={75}
                    minValue={0}
                    maxValue={100}
                    segments={5}
                    needleColor="steelblue"
                    startColor="green"
                    endColor="red"
                    textColor="#fff"
                    currentValueText="Javascript"
                />
                </div>
                <div data-aos="fade-right">
                <ReactSpeedometer
                    value={68}
                    minValue={0}
                    maxValue={100}
                    segments={5}
                    needleColor="steelblue"
                    startColor="green"
                    endColor="red"
                    textColor="#fff"
                    currentValueText="nodejs and expressjs"
                />
            </div>
            <div data-aos="fade-down">
                <ReactSpeedometer
                    value={75}
                    minValue={0}
                    maxValue={100}
                    segments={5}
                    needleColor="steelblue"
                    startColor="green"
                    endColor="red"
                    textColor="#fff"
                    currentValueText="MySql,sql,and mongodb(compass,atlas)"
                />
                </div>
                </div>
            </div>
  )
}

export default Skills
