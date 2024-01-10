// eslint-disable-next-line no-unused-vars
import React from "react";
import SectionHeading from "./components/SectionHeading";
import Heading from "./components/Heading";
import HeadingTitle from "./components/HeadingTitle";
import HeadingSubtitle from "./components/HeadingSubtitle";
import ExtLink from "./components/icons/ExtLink";
import ExtLinkText from "./components/ExtLinkText";

import { FaRotate } from "react-icons/fa6";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaRssSquare,
} from "react-icons/fa";
import ContactIconWrapper from "./components/ContactIconWrapper";
import Results from "./components/Results";

function App() {
  const [flipPage, setFlipPage] = React.useState(false);

  return (
    <>
      <aside>
        <button
          type="button"
          onClick={() => setFlipPage((prev) => !prev)}
          aria-label="Flip Page"
        >
          <FaRotate />
        </button>
      </aside>
      {flipPage ? (
        <>
          <section>
            <div className="contact">
              <div className="contactName">Piotr Bogdan Placzek</div>
              <div className="contactIcons">
                <ContactIconWrapper
                  href="mailto:piotrpdev@gmail.com"
                  icon={<FaEnvelope />}
                  text="piotrpdev@gmail.com"
                />
                <ContactIconWrapper
                  href="tel:***REMOVED***"
                  icon={<FaPhoneAlt />}
                  // @ts-ignore
                  text={import.meta.env.VITE_PHONE_NUMBER || <b>REDACTED</b>}
                />
                <ContactIconWrapper
                  href="mailto:piotrpdev@gmail.com"
                  icon={<FaMapMarkerAlt />}
                  text="Waterford City, Co. Waterford"
                />
                <ContactIconWrapper
                  href="https://piotrp.dev/"
                  icon={<FaRssSquare />}
                  text="piotrp.dev"
                />
                <ContactIconWrapper
                  href="https://github.com/piotrpdev"
                  icon={<FaGithubSquare />}
                  text="piotrpdev"
                />
                <ContactIconWrapper
                  href="https://www.linkedin.com/in/piotrpdev"
                  icon={<FaLinkedin />}
                  text="piotrpdev"
                />
                <ContactIconWrapper
                  href="https://twitter.com/piotrpdev"
                  icon={<FaTwitterSquare />}
                  text="piotrpdev"
                />
              </div>
            </div>
          </section>

          <section>
            <SectionHeading>Education</SectionHeading>
            <Heading
              href="https://www.wit.ie/courses/bsc-hons-in-software-systems-development-degree-course"
              aside="Sep 2021 &#8211; Jun 2025"
            >
              <HeadingTitle>
                BSc (Hons.) in Software Systems Development,{" "}
              </HeadingTitle>
              <HeadingSubtitle>
                South East Technological University (WIT)
              </HeadingSubtitle>
            </Heading>
            <Results />
          </section>

          <section>
            <SectionHeading>Projects</SectionHeading>

            <Heading
              href="https://github.com/piotrpdev/Arduino-Discord-Controller"
              aside="Jan 2023"
            >
              <HeadingTitle>
                Arduino Discord Controller
                <ExtLink />
              </HeadingTitle>
            </Heading>
            <div className="indentedContent project">
              <p>
                Controlling{" "}
                <ExtLinkText
                  text="Discord"
                  href="https://discord.com/safety/360044149331-what-is-discord"
                />{" "}
                (VoIP desktop app) using a combination of{" "}
                <ExtLinkText
                  text="Arduino"
                  href="https://learn.sparkfun.com/tutorials/what-is-an-arduino/all"
                />
                ,{" "}
                <ExtLinkText
                  text="BetterDiscord"
                  href="https://betterdiscord.app/"
                />
                , and Python.
              </p>
              <ul>
                <li>
                  Created a touchscreen user interface and simple messaging
                  protocol on the Arduino using C++.
                </li>
                <li>
                  Made a Python WebSocket server to facilitate communication
                  between the Arduino and Discord.
                </li>
                <li>
                  Reverse-engineered Discord to capture UI events and send them
                  to the Python Server using JavaScript.
                </li>
              </ul>
            </div>

            <Heading
              href="https://github.com/piotrpdev/WIT-Timetable-Generator"
              aside="Apr 2022"
            >
              <HeadingTitle>
                WIT Timetable Generator
                <ExtLink />
              </HeadingTitle>
            </Heading>

            <div className="indentedContent project">
              <p>
                Uses <ExtLinkText text="Puppeteer" href="https://pptr.dev/" />
                to automatically fill out the WIT Timetable Page and generate a
                screenshot and PDF of the school timetable.
              </p>
              <ul>
                <li>
                  Used JavaScript for web scraping and{" "}
                  <ExtLinkText
                    text="GitHub Actions"
                    href="https://github.com/features/actions/"
                  />{" "}
                  to automatically generate a weekly timetable.
                </li>
                <li>
                  Interacted with the{" "}
                  <ExtLinkText
                    text="Discord API"
                    href="https://discord.com/developers/docs/intro"
                  />{" "}
                  including Webhooks and uploading files.
                </li>
                <li>
                  Used YAML and understanding of Linux to create effective
                  scripts for Virtual Machines.
                </li>
              </ul>
            </div>

            {/* <Heading
              href="https://github.com/piotrpdev/WeBuy-Cex-Price-Tracker"
              aside="Feb 2020"
            >
              <HeadingTitle>
                WeBuy Cex Price Tracker
                <ExtLink />
              </HeadingTitle>
            </Heading>
            <div className="indentedContent project">
              <p>
                A Python script that gets the prices of certain{" "}
                <ExtLinkText text="CeX" href="https://ie.webuy.com/" /> products
                and uploads them to Google Sheets.
              </p>
              <ul>
                <li>
                  Used Python and GitHub Actions, also interacted with the Cex and
                  Google APIs.
                </li>
                <li>Used Git to manage code changes efficiently.</li>
                <li>
                  Implemented problem solving skills to manage API limits and
                  large codebase changes.
                </li>
              </ul>
            </div> */}

            <Heading
              href="https://cao-calculator.vercel.app/"
              aside="Dec 2020 &#8211; Feb 2021"
            >
              <HeadingTitle>
                CAO Points Calculator
                <ExtLink />
              </HeadingTitle>
            </Heading>
            <div className="indentedContent project">
              <p>
                Android app that helps calculate how many CAO points you need to
                qualify for a course.
              </p>
              <ul>
                <li>
                  Went through the whole process of coming up with an idea,
                  designing an app, prototyping, and publishing the final
                  product.
                </li>
                <li>
                  Used Expo, React Native, TypeScript, and React Native Paper
                </li>
                <li>
                  Worked on the project on a regular basis, avoiding scope creep
                  and using a Kanban board to focus on finishing the product in
                  a timely manner.
                </li>
              </ul>
            </div>
          </section>
        </>
      ) : (
        <>
          <section>
            <SectionHeading>Skills</SectionHeading>
            <div className="skills">
              <table>
                <tr>
                  <th>Technology</th>
                  <td>
                    HTML5, CSS3, JavaScript/TypeScript, React, Python,{" "}
                    Java/Kotlin, Go, C/C#/C++, PHP, Docker
                  </td>
                </tr>
                <tr>
                  <th>Tools</th>
                  <td>
                    GitHub/Git, VSCode, Figma, MS Teams and Office, Trello,
                    Slack, JIRA, LaTeX
                  </td>
                </tr>
                <tr>
                  <th>Languages</th>
                  <td>Polish (Native), English (Fluent)</td>
                </tr>
              </table>
            </div>
          </section>

          <section>
            <SectionHeading>Professional Certification</SectionHeading>
            <div className="certs">
              <table>
                <tr>
                  <th>
                    <ExtLinkText
                      text="AWS Certified Solutions Architect"
                      href="https://www.credly.com/badges/3f71b700-5869-4486-a00e-8f954a4fabbc/linked_in_profile"
                    />
                  </th>
                  <th>
                    <ExtLinkText
                      text="AWS Certified Cloud Practitioner"
                      href="https://www.credly.com/badges/753358be-51cd-4817-897b-ae7dab4ddc3d/linked_in_profile"
                    />
                  </th>
                </tr>
                <tr>
                  <td>Completed Aug 2022 - Expires Aug 2025</td>
                  <td>Completed Jul 2022 - Expires Aug 2025</td>
                </tr>
              </table>
            </div>
          </section>

          <section>
            <SectionHeading>Courses</SectionHeading>

            <Heading
              className="heading inline"
              href="https://www.redhat.com/en/services/training/ad482-developing-event-driven-applications-apache-kafka-and-red-hat-amq-streams"
              aside="July 2023"
            >
              <HeadingTitle>
                Event-Driven Applications with Apache Kafka (AD482),{" "}
              </HeadingTitle>
              <HeadingSubtitle>
                Red Hat Training and Certification
              </HeadingSubtitle>
            </Heading>

            <div className="indentedContent">
              <p>
                Learned to work with Apache Kafka and Red Hat AMQ Streams to
                create event-driven applications.
              </p>
            </div>

            <Heading
              className="heading inline"
              href="https://www.redhat.com/en/services/training/red-hat-openshift-administration-i-operating-a-production-cluster"
              aside="Jun 2023"
            >
              <HeadingTitle>
                Red Hat OpenShift Administration I (DO180),{" "}
              </HeadingTitle>
              <HeadingSubtitle>
                Red Hat Training and Certification
              </HeadingSubtitle>
            </Heading>

            <div className="indentedContent">
              <p>
                Learned to manage OpenShift Container Platform clusters along
                with applications running on them.
              </p>
            </div>

            {/* <Heading
              className="heading inline"
              href="https://www.netacad.com/courses/os-it/ndg-linux-essentials"
              aside="Sep 2021"
            >
              <HeadingTitle>
                NDG Linux Essentials,{" "}
              </HeadingTitle>
              <HeadingSubtitle>
                Cisco Networking Academy
              </HeadingSubtitle>
            </Heading>

            <div className="indentedContent">
              <p>
                Learned the important parts of working with Linux including scripting, archiving/compression, etc.
              </p>
            </div> */}
          </section>

          <section>
            <SectionHeading>Professional Experience</SectionHeading>

            <Heading
              className="heading inline"
              href="https://www.redhat.com/en"
              aside="Jun 2023 &#8211; Dec 2023"
            >
              <HeadingTitle>Software Engineering Intern, </HeadingTitle>
              <HeadingSubtitle>Red Hat, Waterford</HeadingSubtitle>
            </Heading>

            <div className="indentedContent">
              <p>
                Part of the Red Hat OpenShift AI Edge team. Learned how to use{" "}
                <ExtLinkText
                  text="OpenShift"
                  href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
                />
                , worked on the RHOAI Edge PoC, and also completed several
                smaller side projects involving Kubernetes and Go.
              </p>
              <p>
                For the PoC, I mainly contributed to the{" "}
                <ExtLinkText
                  text="OpenShift Pipelines"
                  href="https://docs.openshift.com/pipelines/1.13/about/understanding-openshift-pipelines.html"
                />
                /<ExtLinkText text="Tekton" href="https://tekton.dev/" /> code
                which was used to package a provided{" "}
                <ExtLinkText
                  text="AI/ML model"
                  href="https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business"
                />{" "}
                along with its dependencies into a container image, test that
                container image, and finally upload it to{" "}
                <ExtLinkText text="Quay" href="https://quay.io/" /> for
                deployment to the{" "}
                <ExtLinkText
                  text="Edge"
                  href="https://www.redhat.com/en/products/edge"
                />
                . Most of my work can be viewed in the <ExtLinkText text="Open Data Hub AI Edge GitHub repository" href="https://github.com/opendatahub-io/ai-edge" />, I also wrote <ExtLinkText text="two Medium articles" href="https://medium.com/piotr-p%C5%82aczeks-red-hat-internship-experience/new-journey-at-red-hat-c964da99b3c7" /> in which I talk about my internship.
              </p>
            </div>

            <Heading
              className="heading inline"
              href="https://www.kellys.ie/"
              aside="Aug 2021 &#8211; Dec 2022"
            >
              <HeadingTitle>Kitchen Porter, </HeadingTitle>
              <HeadingSubtitle>Kelly&apos;s Resort Hotel, Rosslare</HeadingSubtitle>
            </Heading>

            <div className="indentedContent">
              <p>
                Consistently performed well under pressure, worked efficiently
                with a team, and arrived/left on time.
              </p>
            </div>
          </section>

          {/* <section>
            <SectionHeading>Volunteering Experience</SectionHeading>
            <Heading
              className="heading inline"
              aside="Feb 2019"
            >
              <HeadingTitle>
                Rosslare Tidy Towns,{" "}
              </HeadingTitle>
              <HeadingSubtitle linkIcon={false}>
                General Laborer, Rosslare
              </HeadingSubtitle>
            </Heading>

            <div className="indentedContent">
              <p>
                I carried out various tasks such as giving out brochures to tourists, telling visitors about the history of my town,
helping with the cleaning of my town and landscaping.
              </p>
            </div>
          </section> */}

          <section>
            {/* TODO: Condense/Remove two for space? */}
            <SectionHeading>Interests</SectionHeading>
            <div className="interests">
              <table>
                <tr>
                  <th>Electronics</th>
                  <th>Flight Simulation</th>
                </tr>
                <tr>
                  <td>
                    I like messing around with the Arduino and Raspberry Pi. My
                    most notable project is a throttle quadrant for flight sims.
                  </td>
                  <td>
                    I like playing Microsoft Flight Simulator, listening to ATC
                    traffic, reading airplane manuals etc. I also like airplane
                    related documentaries.
                  </td>
                </tr>
                <tr>
                  <th>Gaming</th>
                  <th>Music</th>
                </tr>
                <tr>
                  <td>
                    I like playing milsims such as Arma 3 along with some casual
                    games such as Rocket League and Pokemon.
                  </td>
                  <td>
                    I love all aspects of music: listening, composition, general
                    theory, etc.
                  </td>
                </tr>
              </table>
            </div>
          </section>

          <section>
            <SectionHeading>References</SectionHeading>
            <div className="references">
              <table>
                <tr>
                  <th>Brendan O&apos;Farrell</th>
                  <th>Mary Lyng</th>
                  <th>Niamh Lambert</th>
                </tr>
                <tr>
                  <td>Software Engineering Manager,</td>
                  <td>Lecturer in Web Dev. and Databases,</td>
                  <td>HR and Assistant Manager,</td>
                </tr>
                <tr>
                  <td>Red Hat</td>
                  <td>South East Technological University</td>
                  <td>Kelly&apos;s Resort Hotel & Spa</td>
                </tr>
                <tr>
                  <td>bofarrel@redhat.com</td>
                  <td>Mary.Lyng@setu.ie</td>
                  <td>NLambert@kellys.ie</td>
                </tr>
                <tr>
                  <td>
                    {/* @ts-ignore */}
                    {import.meta.env.VITE_BRENDAN_PHONE_NUMBER || (
                      <b>REDACTED</b>
                    )}
                  </td>
                  <td>+353 51 302 057</td>
                  <td>+353 53 913 2114</td>
                </tr>
              </table>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default App;
