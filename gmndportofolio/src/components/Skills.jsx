"use client";
import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { useTheme } from 'next-themes';

const speedMeterValues = [
  { id: 1, value: 90, name: "HTML and CSS" },
  { id: 2, value: 75, name: "Javascript" },
  { id: 3, value: 68, name: "Nodejs and Expressjs" },
  { id: 4, value: 75, name: "MySql and Mongodb" },
  { id: 5, value: 85, name: "Bootstrap and Tailwind" },
  { id: 6, value: 80, name: "Reactjs and Nextjs" },
  { id: 7, value: 65, name: "Vercel and OnRender" },
  { id: 8, value: 50, name: "AWS" },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const getColors = () => ({
    startColor: isDark ? "#333333" : "#e8e8e8",
    endColor: isDark ? "#00BFFF" : "blue",
    needleColor: isDark ? "#ffffff" : "steelblue",
    textColor: isDark ? "#ffffff" : "#010c84",
  });

  const { startColor, endColor, needleColor, textColor } = getColors();

  return (
    <div className="md:px-28 max-w-full min-h-screen md:p-14 p-7 bg-white dark:bg-black" id="skills">
      <div className="flex flex-col items-center justify-center m-auto mt-20 p-10 border-2 border-blue-400 shadow-2xl shadow-blue-300 rounded-4xl w-fit gap-y-12" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center text-white text-shadow-lg text-shadow-blue-400" data-aos="fade-left">
          Skills
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center gap-x-20">
          {speedMeterValues.map((item, i) => (
            <div data-aos="zoom-in" key={i}>
              <ReactSpeedometer
                key={`${theme}-${i}`}
                value={item.value}
                minValue={0}
                maxValue={100}
                segments={5}
                needleColor={needleColor}
                startColor={startColor}
                endColor={endColor}
                textColor={textColor}
                currentValueText={item.name}
                width={200}
                height={200}
                needleTransitionDuration={5000}
                needleTransition="easeElastic"
                labelFontSize="12px"
                valueTextFontSize="12px"
                ringWidth={10}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
