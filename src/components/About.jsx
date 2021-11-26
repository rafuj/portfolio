import React from "react";
import {
  BsFillAspectRatioFill,
  BsFillAwardFill,
  BsFillBellFill,
} from "react-icons/bs";
import ReactPlayer from "react-player/youtube";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import classes from "./styles/About.module.css";
export default function About() {
  return (
    <Section background="bg--body">
      <div className="row gy-5 gx-xl-5">
        <div className="col-lg-6">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=xNtD3OeqKlM"
            className={classes.aboutThumb}
          ></ReactPlayer>
        </div>
        <div className="col-lg-6">
          <div className="about__content">
            <SectionHeader
              cate="About Me"
              title="Know About Me"
              txt="I am Abu Raihan Rafuj. I am a Frontend Web Developer at THESOFTKING LTD since July 2019."
            />
            <Tabs>
              <TabList className="nav nav-tabs nav--tabs border-0">
                <Tab className="nav-item">My Skills</Tab>
                <Tab className="nav-item">Expert Language</Tab>
              </TabList>
              <TabPanel>
                <p className="about__text">
                  Magni, modi autem velit deserunt cum libero blanditiis
                  quibusdam officia non illum, nemo maiores, quae neque rerum!
                </p>
                <ul className="about--list">
                  <li>
                    <BsFillBellFill /> HTML5 , CSS3 , Bootstrap, SASS, GULP
                  </li>
                  <li>
                    <BsFillAspectRatioFill />
                    Photoshop , Adobe XD , Adobe illastrator
                  </li>
                  <li>
                    <BsFillAwardFill />
                    Javascript , Jquery
                  </li>
                </ul>
              </TabPanel>
              <TabPanel>
                <p className="about__text">
                  Quia sapiente voluptates ullam rem sit perspiciatis
                  temporibus, qui ipsa laudantium voluptatem ratione in magnam
                  esse laboriosam natus officia impedit eligendi veniam.
                </p>
                <ul className="about--list">
                  <li>
                    <BsFillAspectRatioFill />
                    Bangla
                  </li>
                  <li>
                    <BsFillAwardFill />
                    English
                  </li>
                  <li>
                    <BsFillBellFill />
                    Hindi
                  </li>
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </Section>
  );
}
