import React from 'react'

import Styles from "./Timeline.module.css";
import  WorkIcon from "../../assets/timeline/code.png";
// import  SchoolIcon  from "../../assets/timeline/code.png";
// import timeline from "./Timeline/timeline";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#a36ce0" };
  // let date = {color: white}
  // let schoolIconStyles = { background: "#f9c74f" };

  let timelineElements = [
    {
      id: 1,
      time: "7:30 A.M",
      title: "Inauguration",
      description:
        "Inauguration of the Hackathon Event will be done by the Chief Guest, Principal Sir & all our Faculty Members.",
      date: "7th October 2022",
      icon: "work",
    },
    {
      id: 2,
      time: "8:00 A.M",
      title: "Start Hacking into the Multiverse",
      description:
        "All participants are expected to start working on their projects",
      // date: "8th October 2022",
      icon: "work",
    },
    {
      id: 3,
      time: "5:00 P.M",
      title: "First Jury Round",
      description:
        "Participants are expected to explain their progress in work till the first jury round as well as answer the Jury’s questions.",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 4,
      time: "8:00 A.M",
      title: "Second Jury Round",
      description:
        "Teams are expected to complete 60% of their work and explain the further implementation of their project.",
      date: "8th October 2022",
      icon: "work",
    },
    {
      id: 5,
      time: "2:00 P.M",
      title: "Coding Ends & Judging Round Begins",
      description:
        "Participants should stop coding and prepare for final presentatation.",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 6,
      time: "4:00 P.M",
      title: "Announcements of Finalists",
      description:
        "Finalist teams will be declared which will proceed for Pitching Round.",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 7,
      time: "4:00 P.M",
      title: "Pitching Round Begins",
      description:
        "Teams are required to explain their project with the help of a PowerPoint presentation and demonstrate the same.",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 8,
      time: "6:00 P.M",
      title: "Announcement of Winners",
      description:
        "Winners will be announced.",
      // date: "Vcet Hackathon",
      icon: "work",
    },
  ];

  return (
    <div className='py-5'>
      <h1 className="title my-5">Previous Year Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName={Styles.date}
              iconStyle={workIconStyles }
              icon={ < img src={WorkIcon} className={Styles.image} />}
              // iconClassName={Styles.imgicon}
            >
              <p>{element.time}</p>
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;