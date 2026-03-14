import React from "react";

export type Skill = {
  name: string;
  level: number; // 0-100
};

export type ChartProps = {
  chartTitle: string;
  chartColour: string;
  skills: Skill[];
};

/**
 * Chart / SkillBars – displays a list of skills as horizontal progress bars.
 *
 * @param chartTitle - Title displayed above the bars
 * @param chartColour - Tailwind class for the bar fill color (e.g. `bg-themeOrange`)
 * @param skills - Array of `{ name, level }` objects where `level` is 0–100
 */
export default function Chart({ chartTitle, chartColour, skills }: ChartProps) {
  return (
    <div className="w-[80%] md:w-1/2 lg:w-1/3 mx-auto p-5 bg-gray-800 shadow-2xl">
      <h3 className="text-white text-2xl mb-6 tracking-wider">{chartTitle}</h3>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-5 w-full">
          <div className="flex justify-between mb-1">
            <p className="text-white font-bold tracking-wide">{skill.name}</p>
            <p className="text-white font-bold">{skill.level}%</p>
          </div>
          <div className="bg-gray-900 h-4 rounded">
            <div
              className={`${chartColour} h-4 rounded`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
