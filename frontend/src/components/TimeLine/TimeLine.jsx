// import React from 'react'
// import Timeline from "@mui/lab/Timeline"
// import TimelineItem from "@mui/lab/TimelineItem"
// import TimelineSeperator from "@mui/lab/TimelineSeparator"
// import TimelineConnector from "@mui/lab/TimelineConnector"
// import TimelineContent from "@mui/lab/TimelineContent"
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
// import TimelineDot from "@mui/lab/TimelineDot"
// import {Event} from "@mui/icons-material"
// import Typography from "@mui/material/Typography"


// const TimeLine = ({timelines=[]}) => {
//   return (
//     <div>
//         <Timeline position="alternate">
//        {
//         timelines.map((item,index)=>(
//             <TimelineItem key={index}>
//                <TimelineOppositeContent>
//                 12/22/33
//                 </TimelineOppositeContent> 

//                 <TimelineSeperator>
//                     <TimelineConnector/>
//                     <TimelineDot>
//                         <Event/>
//                     </TimelineDot>
//                     <TimelineConnector/>
//                 </TimelineSeperator>
//                 <TimelineContent>
//                     <Typography variant="h6">Title</Typography>
//                     <Typography>Desc</Typography>
//                 </TimelineContent>
//             </TimelineItem>
//         ))
//        }
//         </Timeline>
//     </div>
//   )
// }

// export default TimeLine


import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.date.toString().split("T")[0]}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
// import React from 'react'
// import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css'
// import {FaGraduationCap, FaAws} from 'react-icons/fa';

// const TimeLine = () => {
//   return (
//     <div className='experience'>
//         <VerticalTimeline lineColor='#000'>
//             <VerticalTimelineElement className='vertical-timeline-element--education'
//             iconStyle={{m:'auto 0',align:'right',background:'#000',color:'#fff'}}
//             icon={<FaGraduationCap/>}
//             date='2010-2015'>
//                 <h3>It Completes</h3>
//                 <p>Sucessfully completed</p>
//             </VerticalTimelineElement>

//             <VerticalTimelineElement className='vertical-timeline-element--education'
//             sx={{m:"auto 0"}}
//             align='right'
//             variant='body2'
//             iconStyle={{background:'#000',color:'#fff'}}
//             icon={<FaAws/>}
//             date='2015-2023'>
//                 <h3>BE-CSE</h3>
//                 <p>Chandigarh University</p>
//             </VerticalTimelineElement>

//         </VerticalTimeline>
      
//     </div>
//   )
// }

// export default TimeLine

// import React from "react";
// import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
// import { IconContext } from "react-icons";

// const VerticalTimeline = ({ events }) => {
//   return (
//     <div className="timeline">
//       {events.map((event, index) => (
//         <div key={index} className="timeline-event">
//           <div className="timeline-event-icon">
//             <IconContext.Provider
//               value={{
//                 className: "timeline-icon",
//               }}
//             >
//               {event.completed ? (
//                 <FaRegCheckCircle />
//               ) : (
//                 <FaRegCircle />
//               )}
//             </IconContext.Provider>
//           </div>
//           <div className="timeline-event-content">
//             <h3 className="timeline-event-title">{event.title}</h3>
//             <p className="timeline-event-description">{event.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VerticalTimeline;

