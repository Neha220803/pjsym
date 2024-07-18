import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import '../../index.css';

const HistoryComp = () => {
  return (
    <Container>
      <div className='each-head mt-4 d-flex justify-content-center'>History</div>
      <div className='my-4 '>
        <VerticalTimeline lineColor={"black"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1975 - 1980"
            contentStyle={{ borderTop: "3px solid  #124076" }}
            contentArrowStyle={{ borderRight: "7px solid  #124076" }}
            iconStyle={{ background: "#124076", color: "#fff" }}
          //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Initial involvement</h3>
            <p>Involvement of Fr. George Peter SJ, Fr. Irudaya Raj SJ, and Sr. Christine HC in youth ministry.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012"
            contentStyle={{ borderTop: "3px solid   " }}
            contentArrowStyle={{ borderRight: "7px solid  #124076" }}
            iconStyle={{ background: "#124076", color: "#fff" }}
          //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Promulgated of Vision and Mission</h3>

            <p>
              Patna Jesuit Youth Ministry officially promulgated
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2000 - 2001"
            contentStyle={{ borderTop: "3px solid  #124076" }}
            contentArrowStyle={{ borderRight: "7px solid  #124076" }}
            iconStyle={{ background: "#124076", color: "#fff" }}

          >
            <h3 className="vertical-timeline-element-title">Creation of Vission</h3>
            <p>Province Vision formulated to build human communities based on the
              Gospel values of freedom</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  #124076" }}
            contentStyle={{ borderTop: "3px solid  #124076" }}
            date="2019"
            iconStyle={{ background: "#124076", color: "#fff" }}
          //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Vocation Promoter: Full-time <br></br> Fr. Anthony Prakash SJ
            </h3>
            <p>
              Inherits responsibility for Youth Apostolate.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Container>
  )
}

export default HistoryComp