import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from 'react-icons/md'
import {FaUserGraduate, FaSchool} from 'react-icons/fa'

const Education = () => {
  return (
    <> 
        <div className="container education" id="education">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Educational Details</h2>
            <hr />
            <VerticalTimeline>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#D3D3D3", color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date={<span style={{ color: 'black' }}>2021 - 2025</span>}
                    iconStyle={{ background: '#e0b50f', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h3 className="vertical-timeline-element-title">B.Tech (IT)</h3>
                    <h4 className="vertical-timeline-element-subtitle">United College OF Engineering And Research, Prayagraj</h4>
                    <p>
                    CGPA - 8.34
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#D3D3D3", color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date={<span style={{ color: 'black' }}>2019 - 2020</span>}
                    iconStyle={{ background: '#e0b50f', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Intermediate (12th) - CBSE</h3>
                    <h4 className="vertical-timeline-element-subtitle">Swami Vivekanand Vidya Ashram, Prayagraj</h4>
                    <p>
                    Percentage - 74.80%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#D3D3D3", color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date={<span style={{ color: 'black' }}>2017 - 2018</span>}
                    iconStyle={{ background: '#e0b50f', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Highschool (10th) - CBSE</h3>
                    <h4 className="vertical-timeline-element-subtitle">Swami Vivekanand Vidya Ashram, Prayagraj</h4>
                    <p>
                    Percentage - 84.16%
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    </>
  )
}

export default Education