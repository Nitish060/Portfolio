import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsFiletypeJava} from 'react-icons/bs'
import {RiNodejsLine} from 'react-icons/ri'
import {MdOutlineDeveloperMode} from 'react-icons/md'
import './WorkExp.css'

const WorkExp = () => {
  return (
    <>
        <div className="work" id="workexp">
          <div className="container work-exp">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experiences</h2>
            <hr />
            <VerticalTimeline className="custom-timeline">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#D3D3D3', color: '#1e1e2c' }}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date={<span style={{ color: 'black' }}>July 2024 - September 2024</span>}
                iconStyle={{ background: '#e0b50f', color: '#fff' }}
                icon={<RiNodejsLine />}
              > 
                <h3 className="vertical-timeline-element-title">MERN Stack - Training</h3>
                <h4 className="vertical-timeline-element-subtitle">CETPA Infotech Pvt. Ltd.</h4>
                <p>
                  Build substantial expertise and practical ability in MERN Stack development.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#D3D3D3', color: '#1e1e2c' }}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date={<span style={{ color: 'black' }}>Dcember 2022 - January 2023</span>}
                iconStyle={{ background: '#e0b50f', color: '#fff' }}
                icon={<MdOutlineDeveloperMode />}
              > 
                <h3 className="vertical-timeline-element-title">Java Developer - Internship</h3>
                <h4 className="vertical-timeline-element-subtitle">Oasis Infobyte</h4>
                <p>
                Actively worked on and implemented multiple Java features, resulting in a certificate that validates
                my successful task completion.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#D3D3D3', color: '#1e1e2c' }}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date={<span style={{ color: 'black' }}>June 2022</span>}
                iconStyle={{ background: '#e0b50f', color: '#fff' }}
                icon={<BsFiletypeJava />}
              > 
                <h3 className="vertical-timeline-element-title">Core Java - Training</h3>
                <h4 className="vertical-timeline-element-subtitle">United Global Infoservice Pvt. Ltd.</h4>
                <p>
                  Strengthened my fundamental understanding of Core Java principles.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div> 
    </>
  )
}

export default WorkExp