import { useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import DropDown from "../DropDown/DropDown";

interface ProjectItem {
  ShortDescription: string;
  Description: string;
  BulletPoints?: string[];
}

export interface TimelineItem {
  JobTitle: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  content?: string[];
  projects?: ProjectItem[];
}

export type TimelineProps = {
  Timelines: TimelineItem[];
  PrimaryColour: "Orange" | "Blue" | "Green" | "Red" | "Purple" | "Black";
};

/**
 * Timeline – renders a vertical timeline of job entries with optional project dropdowns.
 */
export default function Timeline({ Timelines, PrimaryColour }: TimelineProps) {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProjects = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <ul className="relative">
        {Timelines &&
          Timelines.map((item, index) => (
            <li key={index} className="relative flex">
              {!isMobile && (
                <div className="w-40 text-right pr-6 pt-6">
                  <span className="text-sm font-semibold block">
                    {item.startDate} to
                  </span>
                  <span className="text-sm font-semibold block">
                    {item.endDate ? item.endDate : "current"}
                  </span>
                </div>
              )}

              <div
                className={`relative w-8 flex justify-center ${isMobile && "ml-4"}`}
              >
                <span className="absolute top-0 bottom-0 w-[4px] bg-gray-300"></span>
                <span
                  className={`relative z-10 w-4 h-4 rounded-full mt-7 ${
                    index === 0
                      ? `bg-theme${PrimaryColour}`
                      : `bg-white border-4 border-theme${PrimaryColour}`
                  }`}
                ></span>
              </div>

              <div className="ml-4 bg-white rounded-lg p-6 w-full text-left">
                <h3 className="text-lg font-bold">
                  {isMobile &&
                    `${item.startDate} to ${item.endDate ? item.endDate : "current"} - `}
                  {item.JobTitle} at {item.companyName}
                </h3>

                {item.content &&
                  (item.content.length > 1 ? (
                    <ul className="mt-2 leading-relaxed list-disc pl-5">
                      {item.content.map((contentItem, i) => (
                        <li key={i}>{contentItem}</li>
                      ))}
                    </ul>
                  ) : (
                    <span>{item.content[0]}</span>
                  ))}

                {item.projects && item.projects.length > 0 && (
                  <DropDown
                    isOpen={openIndex === index}
                    onToggle={() => toggleProjects(index)}
                    primaryColour={PrimaryColour}
                    toggleText={{
                      OpenText: "View What I Have Worked On",
                      CloseText: "Hide What I Have Worked On",
                    }}
                  >
                    <div className="mt-4 space-y-4">
                      {item.projects.map((project, pIndex) => (
                        <div
                          key={pIndex}
                          className="bg-gray-100 rounded-md p-4 space-y-3"
                        >
                          <h4 className="font-semibold">
                            {project.ShortDescription}
                          </h4>
                          <p className="text-sm mt-1">{project.Description}</p>
                          {project.BulletPoints && (
                            <h5 className="text-sm mt-1 font-semibold">
                              My contributions were:
                            </h5>
                          )}
                          {project.BulletPoints &&
                            project.BulletPoints.length > 0 && (
                              <ul className="text-sm list-disc pl-5 mt-2">
                                {project.BulletPoints.map((bp, bpIndex) => (
                                  <li key={bpIndex}>{bp}</li>
                                ))}
                              </ul>
                            )}
                        </div>
                      ))}
                    </div>
                  </DropDown>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
