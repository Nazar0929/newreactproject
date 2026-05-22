import PropTypes from "prop-types";
import { Card, EventTitle, Row } from "./Eventstyled";

import { FaMapMarkerAlt, FaUser, FaClock } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

import { formatDate } from '../utils/formatdate';
import { formatHoursDistance } from "../utils/formatDistance";

function Event({ name, start, end, location, speaker }) {
  return (
    <Card>
      <EventTitle>{name}</EventTitle>
      <Row>
        <FaMapMarkerAlt /> {location}
      </Row>
      <Row>
        <FaUser /> {speaker}
      </Row>
      <Row>
        <MdDateRange  /> {formatDate(start)} 
      </Row>
      <Row>
        <FaClock  />  {formatHoursDistance(start, end)}
      </Row>
    </Card>
  );
}


export default Event;