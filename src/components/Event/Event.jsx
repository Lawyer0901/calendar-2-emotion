import PropTypes from 'prop-types';
import { FaMapMarkerAlt,FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa"
import { formatEndEvent, formatStartEvent } from "utils";
import { iconSize } from 'constants';
import { Wrapper, EventTitle, EventInfo, EventType } from './Event.styled';


export const Event = ({ name, location, speaker, start, end, type }) => {
    // console.log(css)
    // console.log(css[type])
    const startEvent = formatStartEvent(start)
    const endEvent = formatEndEvent(start, end)
    return (<Wrapper >
  <EventTitle >{name}</EventTitle>
  <EventInfo >
    <FaMapMarkerAlt  size={iconSize.sm}/>
   {location}
  </EventInfo>
  <EventInfo >
    <FaUserAlt  size={iconSize.sm}/>
    {speaker}
  </EventInfo>
  <EventInfo >
    <FaCalendarAlt  size={iconSize.sm}/>
    {startEvent}
  </EventInfo>
  <EventInfo >
    <FaClock  size={iconSize.sm}/>
   {endEvent}
  </EventInfo>
        <EventType eventType={type} >{type}</EventType>
    </Wrapper>)
    
}

// className={`${css.chip} ${css[type]}`

Event.prototype = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
