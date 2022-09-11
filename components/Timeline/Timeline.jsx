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
      title: "10:00 AM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 2,
      title: "10:00 AM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 3,
      title: "10:00 AM",
      description:
        "AssLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 4,
      title: "10:00 AM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 5,
      title: "10:00 AM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 6,
      title: "10:00 AM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      date: "Vcet Hackathon",
      icon: "work",
    },
  ];

  return (
    <>
      <h1 className="title">Timeline</h1>
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
    </>
  );
}

export default Timeline;