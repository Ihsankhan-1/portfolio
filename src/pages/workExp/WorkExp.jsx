import React from "react";
import "./WorkExp.css";
import { SiReact, SiAdobexd } from "react-icons/si";

import { FaGooglePlay } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2e" }}
              contentArrowStyle={{
                borderRight: "7px solid   white",
              }}
              iconStyle={{ background: "#1e1e2e", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: " white", color: "#1e1e2e" }}
              contentArrowStyle={{
                borderRight: "7px solid   white",
              }}
              iconStyle={{ background: "#08C2FF", color: "#fff" }}
              icon={<FaGooglePlay />}
            >
              <h3 className="vertical-timeline-element-title">
                Mobile App Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2e" }}
              contentArrowStyle={{
                borderRight: "7px solid   white",
              }}
              iconStyle={{ background: "#54C392", color: "#fff" }}
              icon={<SiAdobexd />}
            >
              <h3 className="vertical-timeline-element-title">Design</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
