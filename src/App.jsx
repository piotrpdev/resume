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
  const [flipPage, setFlipPage] = React.useState(true);

  return (
    <>
      <aside>
        <button type="button" onClick={() => setFlipPage(prev => !prev)} aria-label="Flip Page"><FaRotate /></button>
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
                  Used YAML and understanding of Linux to create effective scripts
                  for Virtual Machines.
                </li>
              </ul>
            </div>
            <Heading
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
            </div>
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
                  designing an app, prototyping, and publishing the final product.
                </li>
                <li>
                  Used Expo, React Native, TypeScript, and React Native Paper
                </li>
                <li>
                  Worked on the project on a regular basis, avoiding scope creep
                  and using a Kanban board to focus on finishing the product in a
                  timely manner.
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
                  <td>HTML5, CSS3, JavaScript, TypeScript, React, Svelte, Python, Java, PHP, Docker</td>
                </tr>
                <tr>
                  <th>Tools</th>
                  <td>GitHub, VSCode, Figma, Microsoft Teams and Office, Trello, Slack, LaTeX</td>
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
                  <th><ExtLinkText text="AWS Certified Solutions Architect" href="https://www.credly.com/badges/3f71b700-5869-4486-a00e-8f954a4fabbc/linked_in_profile" /></th>
                  <th><ExtLinkText text="AWS Certified Cloud Practitioner" href="https://www.credly.com/badges/753358be-51cd-4817-897b-ae7dab4ddc3d/linked_in_profile" /></th>
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
              href="https://www.netacad.com/courses/os-it/ndg-linux-essentials"
              aside="Sep 2021 &#8211; Mar 2022"
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
                Learned the important parts of working with Linux including scipting, archiving/compression, etc.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading>Professional Experience</SectionHeading>
            <Heading
              className="heading inline"
              href="https://www.kellys.ie/"
              aside="Aug 2021 &#8211; Present"
            >
              <HeadingTitle>
                Wash-up Personnel,{" "}
              </HeadingTitle>
              <HeadingSubtitle>
                Kelly's Resort Hotel, Rosslare
              </HeadingSubtitle>
            </Heading>

            <div className="indentedContent">
              <p>
                Consistently able to perform under pressure, work efficiently with a team, and arrive/leave on time.
              </p>
            </div>
          </section>

          <section>
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
          </section>

          <section>
            <SectionHeading>Interests</SectionHeading>
            <div className="interests">
              <table>
                <tr>
                  <th>Electronics</th>
                  <th>Flight Simulation</th>
                </tr>
                <tr>
                  <td>I like messing around with the Arduino and Raspberry Pi. My most notable project is a throttle quadrant for flight sims.</td>
                  <td>I like playing Microsoft Flight Simulator, listening to ATC traffic, reading airplane manuals etc. I also like airplane related documentaries.</td>
                </tr>
                <tr>
                  <th>Gaming</th>
                  <th>Music</th>
                </tr>
                <tr>
                  <td>I like playing milsims such as Arma 3 along with some casual games such as Rocket League and Pokemon.</td>
                  <td>I love all aspects of music: listening, composition, general theory, etc.</td>
                </tr>
              </table>
            </div>
          </section>

          <section>
            <SectionHeading>References</SectionHeading>
            <div className="references">
              <table>
                <tr>
                  <th>Brendan O'Farrell</th>
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
                  <td>Kelly’s Resort Hotel & Spa</td>
                </tr>
                <tr>
                  <td>bofarrel@redhat.com</td>
                  <td>Mary.Lyng@setu.ie</td>
                  <td>NLambert@kellys.ie</td>
                </tr>
                <tr>
                  <td>{import.meta.env.VITE_BRENDAN_PHONE_NUMBER || <b>REDACTED</b>}</td>
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
